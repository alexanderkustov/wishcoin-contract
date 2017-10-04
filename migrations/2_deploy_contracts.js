var Wishcoin = artifacts.require("./Wishcoin.sol");

module.exports = function(deployer) {
  deployer.deploy(Wishcoin);
};
