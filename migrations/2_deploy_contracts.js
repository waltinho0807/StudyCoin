var Ownable = artifacts.require("./Ownable.sol");
//var SafeMatch = artifacts.require("./SafeMatch.sol");
var ERC20 = artifacts.require("./ERC20.sol");
var StudyCoin = artifacts.require("./StudyCoin.sol");

module.exports = async function (deployer) {
  await deployer.deploy(Ownable);
  //await deployer.deploy(SafeMatch);
  //await deployer.deploy(ERC20);
  await deployer.deploy(StudyCoin);

};
