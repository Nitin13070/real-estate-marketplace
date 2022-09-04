// migrating the appropriate contracts
var Verifier = artifacts.require("Verifier");
var SolnSquareVerifier = artifacts.require("SolnSquareVerifier");
//var ERC721MintableComplete = artifacts.require("ERC721MintableComplete");


module.exports = async function(deployer) {

  await deployer.deploy(Verifier);
  await deployer.deploy(SolnSquareVerifier, Verifier.address);
  //deployer.deploy(ERC721MintableComplete);
};
