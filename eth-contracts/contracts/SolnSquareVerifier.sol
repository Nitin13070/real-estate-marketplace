pragma solidity >= 0.5.0;

import './ERC721Mintable.sol';
import 'openzeppelin-solidity/contracts/math/SafeMath.sol';

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
contract IVerifier {
    function verifyTx(uint[2] memory a, uint[2][2] memory b, uint[2] memory c, uint[2] memory input) public view returns (bool r);
}

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is ERC721MintableComplete {
    using SafeMath for uint256;

    // TODO define a solutions struct that can hold an index & an address
    struct Solution {
        uint256 _index;
        address _address;
    }

    // TODO define an array of the above struct
    Solution[] private _solutions;

    // TODO define a mapping to store unique solutions submitted
    mapping (uint256 => Solution) private _solutionSubmitted;

    IVerifier private verifier;

    // TODO Create an event to emit when a solution is added
    event SolutionAdded();

    constructor(address verifierAddress) public {
        verifier = IVerifier(verifierAddress);
    }

    // TODO Create a function to add the solutions to the array and emit the event
    function addSolution() public {
        
    }


    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly

  

}
























