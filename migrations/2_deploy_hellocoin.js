var HelloCoin = artifacts.require("HelloCoin");

module.exports = function(deployer) {
  deployer.deploy(HelloCoin, {
    gas: 2000000,
    from: "0x6898a60bb7a38f5b70cb6d18930177d1d5b9eaa6"
  });
};