import "@nomiclabs/hardhat-waffle";
import { HardhatUserConfig } from 'hardhat/types';
import { NetworkUserConfig } from 'hardhat/types';

import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-ethers';
import 'hardhat-typechain';
import 'hardhat-gas-reporter';
import "hardhat-abi-exporter"
import "hardhat-deploy";

const dotenv = require('dotenv');
dotenv.config();

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const BSC_API_KEY = process.env.BSC_API_KEY;
const INFURA_API_KEY= process.env.INFURA_API_KEY;
const MNEMONIC = process.env.MNEMONIC;
const ALCHEMY_KEY = process.env.ALCHEMY_KEY;
const PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY;
const PRIVATE_KEY_BSC = process.env.DEPLOYER_PRIVATE_KEY_BSC;

enum CHAIN_IDS {
  goerli = 5,
  hardhat = 31337,
  kovan = 42,
  mainnet = 1,
  rinkeby = 4,
  ropsten = 3,
  bsc = 97
};

const createTestnetConfig = (network: CHAIN_IDS): NetworkUserConfig => {
  const url: string = 'https://' + CHAIN_IDS[network] + '.infura.io/v3/' + INFURA_API_KEY;
  return {
    accounts: {
      count: 10,
      initialIndex: 0,
      mnemonic: MNEMONIC,
      path: "m/44'/60'/0'/0",
    },
    chainId: network,
    url,
  };
}

const config: HardhatUserConfig & { namedAccounts: any } = {
  abiExporter: {
    path: "./abi",
    clear: true,
    flat: true
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000
      }
    }
  },
  etherscan : {
    apiKey: BSC_API_KEY
  },
  gasReporter: {
    currency: "USD",
    enabled: (process.env.REPORT_GAS) ? true : false,
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    excludeContracts: ["contracts/mocks/", "contracts/libraries/"]
  },
  mocha: {
    timeout: 20000
  },
  defaultNetwork: "localhost",
  networks: {
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
    hardhat: {
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_KEY}` || "",
        blockNumber: 12618875
      }
    },
    mainnet: createTestnetConfig(CHAIN_IDS.mainnet),
    rinkeby: {
      accounts: [PRIVATE_KEY as string],
      url: 'https://rinkeby.infura.io/v3/' + INFURA_API_KEY,
      chainId: 4
    },
    goerli: createTestnetConfig(CHAIN_IDS.goerli),
    ropsten: createTestnetConfig(CHAIN_IDS.ropsten),
    kovan: createTestnetConfig(CHAIN_IDS.kovan),
    bsc: {
      accounts: [PRIVATE_KEY_BSC as string],
      chainId: 97,
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/"
    }
  },
  typechain: {
    outDir: "./types",
    target: "ethers-v5",
  },
  namedAccounts: {
    deployer: {
      default: 0,
      // [CHAIN_IDS.rinkeby]: "0xe164E49ED19DDBC32ce7Dd9DE7E28DF3b721B037"
    }
  },
  paths: {
    artifacts: "artifacts",
    cache: "cache",
    deploy: "deploy",
    deployments: "deployments",
    imports: "imports",
    sources: "contracts",
    tests: "test",
  },
}

export default config;

