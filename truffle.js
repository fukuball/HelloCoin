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
      port: 8546,
      from: "0x6898a60bb7a38f5b70cb6d18930177d1d5b9eaa6",
      gas: 84000,
      gasPrice: 21000000000,
      network_id: "development" // Match any network id
    },
    mainnet: {
      host: "localhost",
      port: 8545,
      from: "0x6898a60bb7a38f5b70cb6d18930177d1d5b9eaa6",
      gas: 84000,
      gasPrice: 21000000000,
      network_id: "mainnet" // Match any network id
    }
  }
};
