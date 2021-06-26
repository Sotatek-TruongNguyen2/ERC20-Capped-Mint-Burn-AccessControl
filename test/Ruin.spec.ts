import { ethers } from "hardhat";
import { expect } from "chai";
import { Signer } from "ethers";
import { Ruin } from '../types/Ruin';
import { Ruin__factory } from '../types/factories/Ruin__factory';

describe("Ruin Token", function () {
    // const deployArgs = ["Super Ruin Token", "RUIN", 18, "10000000000000000000000000000000000"];
    let ruinContract: Ruin | undefined;
    let alice: Signer | undefined;
    let dave: Signer | undefined;
    let MINTER_ROLE: string = "";
    let BURNER_ROLE: string = "";

    beforeEach(async function () {
        try {
            [alice, dave] = await ethers.getSigners();
            const factory = new Ruin__factory(alice);
            ruinContract = await factory.deploy("Super Ruin Token", "RUIN", 18, "100000000");
            MINTER_ROLE = await ruinContract.MINTER_ROLE();
            BURNER_ROLE = await ruinContract.BURNER_ROLE();
        } catch (err) {
            console.log(err.message);
        }
    });

    describe("Access Control", async () => {
        it("Admin be able to grant roles for others", async () => {
            if (alice && dave && ruinContract) {
                const aliceAddress = await alice.getAddress();

                await expect(await ruinContract.grantRole(aliceAddress, MINTER_ROLE)).to.be.emit(ruinContract, "GrantRole");
            }
        });

        it("Only admin to be able to grant roles for others", async () => {
            if (alice && dave && ruinContract) {
                const daveAddress = await dave.getAddress();

                try {
                    await ruinContract.connect(dave).grantRole(daveAddress, MINTER_ROLE);
                    return;
                } catch (err) {
                   expect(err.message).to.equal("VM Exception while processing transaction: revert AccessControl::Your role is not able to do this");
                }
            }
        })

        it("A person not be able to be granted one role 2 times", async () => {
            if (alice && dave && ruinContract) {
                const daveAddress = await dave.getAddress();

                await ruinContract.grantRole(daveAddress, MINTER_ROLE);
                try {
                    await ruinContract.grantRole(daveAddress, MINTER_ROLE);
                } catch (err) {
                    expect(err.message).to.equal("VM Exception while processing transaction: revert AccessControl::User already granted for this role");
                }
            }
        });

        it("A person able to be in mary roles", async () => {
            if (alice && dave && ruinContract) {
                const aliceAddress = await alice.getAddress();

                await ruinContract.grantRole(aliceAddress, MINTER_ROLE);
                await expect(await ruinContract.grantRole(aliceAddress, BURNER_ROLE)).to.be.emit(ruinContract, "GrantRole");
            }
        });

        it("A person able to renounce current roles", async () => {
            if (alice && dave && ruinContract) {
                const aliceAddress = await alice.getAddress();

                await ruinContract.grantRole(aliceAddress, MINTER_ROLE);
                await expect(await ruinContract.renounceRole(aliceAddress, MINTER_ROLE)).to.be.emit(ruinContract, "RevokeRole");
            }
        });

        it("A person not be able to renounce other person's roles", async () => {
            if (alice && dave && ruinContract) {
                const aliceAddress = await alice.getAddress();
                await ruinContract.grantRole(aliceAddress, MINTER_ROLE);

                try {
                    await ruinContract.connect(dave).renounceRole(aliceAddress, MINTER_ROLE);
                } catch (err) {
                    expect(err.message).to.equal("VM Exception while processing transaction: revert AccessControl::You can only renounce roles for self");
                }
            }
        });
    })

    describe("Minting", async function () {
        const MINTING_AMOUNT = 100000000;
        const MINTING_AMOUNT_EXCEEDS_CAP = 1000000000;

        it("Admin not be able to mint tokens", async () => {
            if (alice && ruinContract) {
                const aliceAddress = await alice.getAddress();
                await expect(ruinContract.connect(alice).mint(aliceAddress, MINTING_AMOUNT)).to.be.revertedWith("AccessControl::Your role is not able to do this");
            }
        });

        it("Burner not be able to mint tokens", async () => {
            if (alice && ruinContract) {
                const aliceAddress = await alice.getAddress();
                await ruinContract.grantRole(aliceAddress, BURNER_ROLE);
                await expect(ruinContract.connect(alice).mint(aliceAddress, MINTING_AMOUNT)).to.be.revertedWith("AccessControl::Your role is not able to do this");
            }
        });

        it("Minter be able to mint token", async () => {
            if (alice && dave && ruinContract) {
                const aliceAddress = await alice.getAddress();

                await ruinContract.connect(alice).grantRole(aliceAddress, MINTER_ROLE);
                await expect(ruinContract.connect(alice).mint(aliceAddress, MINTING_AMOUNT)).to.emit(ruinContract, "Transfer");
            }
        });

        it("Minter shouldn't be able to mint exceeds cap", async () => {
            if (alice && dave && ruinContract) {
                const aliceAddress = await alice.getAddress();

                await ruinContract.grantRole(aliceAddress, MINTER_ROLE);
                await expect(ruinContract.connect(alice).mint(aliceAddress, `${MINTING_AMOUNT_EXCEEDS_CAP}`)).to.revertedWith("ERC20Capped::You mint exceeds your cap");
            }
        })

        it("Minter shouldn't be able to mint exceeds cap", async () => {
            if (alice && dave && ruinContract) {
                const aliceAddress = await alice.getAddress();

                await ruinContract.grantRole(aliceAddress, MINTER_ROLE);
                await ruinContract.connect(alice).mint(aliceAddress, MINTING_AMOUNT);
                await expect(ruinContract.connect(alice).mint(aliceAddress, `${MINTING_AMOUNT_EXCEEDS_CAP}`)).to.revertedWith("ERC20Capped::You mint exceeds your cap");
            }
        })
    });

    describe("Burning", async function () {
        const BURNING_AMOUNT = 1000;
        const MINTING_AMOUNT = 10000;
        const BURNING_AMOUNT_EXCEED = 1000000;
        it("Burner burns tokens successful!", async () => {
            if (alice && dave && ruinContract) {
                const aliceAddress = await alice.getAddress();
                const daveAddress = await dave.getAddress();

                await ruinContract.grantRole(aliceAddress, MINTER_ROLE);
                await ruinContract.grantRole(aliceAddress, BURNER_ROLE);
                await ruinContract.connect(alice).mint(daveAddress, MINTING_AMOUNT);
                await ruinContract.connect(alice).burn(daveAddress, BURNING_AMOUNT);
                await expect(await ruinContract.balanceOf(daveAddress)).to.equal(MINTING_AMOUNT - BURNING_AMOUNT);
            }
        });

        it("Minter role can't burn tokens", async () => {
            if (alice && ruinContract) {
                const aliceAddress = await alice.getAddress();

                await ruinContract.grantRole(aliceAddress, MINTER_ROLE);
                await ruinContract.connect(alice).mint(aliceAddress, MINTING_AMOUNT);
                await expect(ruinContract.connect(alice).burn(aliceAddress, BURNING_AMOUNT)).to.be.revertedWith("AccessControl::Your role is not able to do this");
            }
        });

        it("Burner can burn tokens", async () => {
            if (alice && dave && ruinContract) {
                const aliceAddress = await alice.getAddress();
                const daveAddress = await dave.getAddress();

                await ruinContract.grantRole(daveAddress, BURNER_ROLE);
                await ruinContract.grantRole(aliceAddress, MINTER_ROLE);
                await ruinContract.connect(alice).mint(aliceAddress, MINTING_AMOUNT);
                await expect(ruinContract.connect(dave).burn(aliceAddress, BURNING_AMOUNT)).to.be.emit(ruinContract, "Transfer");
            }
        });

        it("Burner can't burn amount of tokens exceeds balance", async () => {
            if (alice && dave && ruinContract) {
                const aliceAddress = await alice.getAddress();
                const daveAddress = await dave.getAddress();

                await ruinContract.grantRole(daveAddress, BURNER_ROLE);
                await ruinContract.grantRole(aliceAddress, MINTER_ROLE);
                await ruinContract.connect(alice).mint(aliceAddress, MINTING_AMOUNT);
                await expect(ruinContract.connect(dave).burn(aliceAddress, BURNING_AMOUNT_EXCEED)).to.be.revertedWith("Ruin::Burning amount exceeds account balance");
            }
        })
    });
});
