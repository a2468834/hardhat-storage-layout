require('hardhat-storage-layout');
require('dotenv').config();

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.1",
        settings: {
          optimizer: {
            enabled: false,
            runs: 200
          },
          outputSelection: {
            '*': {
                '*': [ '*' ]
            }
          }
        }
      },
      {
        version: "0.4.18",
        settings: {
          optimizer: {
            enabled: false,
            runs: 200
          }
        }
      }
    ]
  },
  networks: {
    hardhat: {
      forking: {
        url: process.env.Mainnet
      }
    }
  }
};
