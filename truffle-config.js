module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "localhost",
      port: 8546,
      network_id: "development" // Match any network id
    },
    mainnet: {
      host: "localhost",
      port: 8545,
      network_id: "mainnet" // Match any network id
    }
  }
};
