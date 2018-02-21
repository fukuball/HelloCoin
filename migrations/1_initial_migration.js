var Migrations = artifacts.require("./Migrations.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations, {
    gas: 168000,
    gasPrice: 21000000000,
    from: "0x6898a60bb7a38f5b70cb6d18930177d1d5b9eaa6"
  });
};
