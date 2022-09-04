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
        uint256 index;
        address solnAddress;
        bool isUsed;
    }

    // TODO define an array of the above struct
    Solution[] private _solutions;

    // TODO define a mapping to store unique solutions submitted
    mapping (bytes32 => Solution) private _solutionSubmitted;

    IVerifier private verifier;

    // TODO Create an event to emit when a solution is added
    event SolutionAdded(uint256 indexed index, address indexed solnAddress);

    constructor(address verifierAddress) public {
        verifier = IVerifier(verifierAddress);
    }

    // TODO Create a function to add the solutions to the array and emit the event
    function addSolution(uint[2] memory a, uint[2][2] memory b, uint[2] memory c, uint[2] memory input) public {
        bytes32 key = getSolutionKey(input);
        require(_solutionSubmitted[key].index == 0, "Solution Already Submitted.");

        bool result = verifier.verifyTx(a, b, c, input);
        require(result == true, "Incorrect inputs, Verfication Failed.");

        Solution memory soln = Solution(_solutions.length + 1, msg.sender, false);
        _solutions.push(soln);

        _solutionSubmitted[key] = soln;
        emit SolutionAdded(soln.index, soln.solnAddress);
    }


    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly
    function mintVerifiedToken(uint[2] calldata input, address to) external {
        bytes32 key = getSolutionKey(input);
        Solution memory soln = _solutionSubmitted[key];
        require(soln.index != 0, "Input has not been verified.");
        require(soln.solnAddress == to, "Not Authorized to mint token with given inputs.");
        require(soln.isUsed == false, "Token is already minted with given inputs.");

        mint(to, soln.index);
        _solutionSubmitted[key].isUsed = true;
    }
  
    function getSolutionKey(uint[2] memory input) pure private returns(bytes32) 
    {
        return keccak256(abi.encodePacked(input[0], input[1]));
    }
}
























