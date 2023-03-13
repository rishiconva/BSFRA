const payment = artifacts.require("payment");

module.exports = function (deployer) {
  deployer.deploy(payment);
};
