import { expect } from "chai";
import { ethers } from 'hardhat';
import { Signer, Contract } from 'ethers';

describe("Ruin", function() {
    // const deployArgs = ["Super Ruin Token", "RUIN", 18, "10000000000000000000000000000000000"];
    let ruinContract: Contract | undefined;
    let alice: Signer | undefined;
    let dave: Signer | undefined;
    
    beforeEach(async () => {
        // try {
        //     const ruin = await ethers.getContractFactory("Ruin");
        //     ruinContract = await ruin.deploy("Super Ruin Token", "RUIN", 18, "10000000000000000000000000000000000");
        //     [alice, dave] = await ethers.getSigners();
        // } catch (err) {
        //     console.log(err.message);
        // }
    });

    it("Only minter can mint tokens", async function() {
        expect("zxc").to.equal("123");
        // const MINTING_AMOUNT = 100000000;
        // try {
        //     if (alice && ruinContract) {
        //         const aliceAddress = await alice.getAddress(); 
        //         console.log(aliceAddress);
        //         await ruinContract.connect(alice).mint(aliceAddress, MINTING_AMOUNT);
        //     }
        // } catch (err) {
        //     console.log(err.message);
        // }
    });

});