const CeloContract = artifacts.require("CeloContract");

module.exports = function (deployer) {
  deployer.deploy(CeloContract);
};