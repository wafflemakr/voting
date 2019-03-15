const Voting = artifacts.require("App");

module.exports = function(deployer) {
  deployer.deploy(Voting);
};
