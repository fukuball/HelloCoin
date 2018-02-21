module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    mainnet: {
      host: "localhost",
      port: 8545,
      from: "0x6898a60bb7a38f5b70cb6d18930177d1d5b9eaa6",
      gas: 4700000,
      network_id: "mainnet" // Match any network id
    }
  }
};
