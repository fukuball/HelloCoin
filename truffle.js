require('dotenv').config();

var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = process.env.CREATOR_MNEMONIC;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  rpc: {
    host: "localhost",
    port: 8545
  },
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      from: process.env.CREATOR_PUBLIC_KEY,
      gas: 4000000,
      gasPrice: 21000000000,
      network_id: "development" // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/" + process.env.INFURA_TOKEN)
      },
      from: process.env.CREATOR_PUBLIC_KEY,
      gas: 4000000,
      gasPrice: 21000000000,
      network_id: "ropsten"
    },
    mainnet: {
      host: "localhost",
      port: 8545,
      from: "0x6898a60bb7a38f5b70cb6d18930177d1d5b9eaa6",
      gas: 4000000,
      gasPrice: 21000000000,
      network_id: "mainnet" // Match any network id
    }
  }
};
