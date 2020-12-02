const MyERC20 = artifacts.require("PrometheusToken");

module.exports = function(deployer) {
	deployer.deploy(MyERC20, "10000000000000000000000000");
};
