import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const deployRuinToken: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
    const {deployments, getNamedAccounts} = hre;
    const {deploy} = deployments;
    const {deployer} = await getNamedAccounts();
    
    const deployArgs = ["Super Ruin Token", "RUIN", 18, "10000000000000000000000000000000000"];

    const { address: contractAddress } = await deploy('Ruin', {
      from: deployer,
      args: deployArgs,
      log: true,
      deterministicDeployment: false,
    });

    await new Promise((res, rej) => {
      setTimeout(async () => {
        res(
          await hre.run("verify:verify", {
            address: contractAddress,
            constructorArguments: deployArgs,
          })
        )
      }, 13000);
    })
  };

export default deployRuinToken;