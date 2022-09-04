# Real Estate Marketplace NFT

Decentralized housing NFT. 

## How to test Code

1. Clone the Project

```
git clone https://github.com/Nitin13070/real-estate-marketplace.git
```

2. Navigate to project directory and install node modules.

```
npm install
```

3. Navigate to Contracts Directory

```
cd eth-contracts/
```

4. Create `.secret` file in Contracts Directory which includes your local Ganache Workspace MNEMONIC.

5. Compile Contracts.

```
truffle compile
```

6. Migrate Contracts to local Ganache.

```
truffle migrate --network development --reset
```
 
 7. Execute Truffle Tests.

 ```
truffle test
 ```

## NFT Details Deployed on Rinkeby Network

1. Zokrates's Verifier Contract

> etherscan url = https://rinkeby.etherscan.io/address/0x06120c6E9DD3989d98BCe34511149aE35408e932

> contract address = 0x06120c6E9DD3989d98BCe34511149aE35408e932

> transaction hash = 0x822b5c58c756daa028d6fd6d3c266659076bf9efb795b6774a8494d311ebcdb7

2. ERC-721 Token Contract (RealStateNFT)

> etherscan url = https://rinkeby.etherscan.io/address/0xca3b93178829D0df961516972B56d2d7986a575B

> token url = https://rinkeby.etherscan.io/token/0xca3b93178829D0df961516972B56d2d7986a575B

> contract address = 0xca3b93178829D0df961516972B56d2d7986a575B

> transaction hash = 0x9f1511eca3e5391884f38f57e4de9e80c1c3e40cf23e078b1f89a4f5f3d7682e

3. OpenSea MarketPlace Storefront link

> https://testnets.opensea.io/collection/realstatenft

4. Contract ABI

<details>
    <summary>Expand to View</summary>

    [
        {
        "inputs": [
            {
            "internalType": "address",
            "name": "verifierAddress",
            "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
        },
        {
        "anonymous": false,
        "inputs": [
            {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
            },
            {
            "indexed": true,
            "internalType": "address",
            "name": "approved",
            "type": "address"
            },
            {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
        },
        {
        "anonymous": false,
        "inputs": [
            {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
            },
            {
            "indexed": true,
            "internalType": "address",
            "name": "operator",
            "type": "address"
            },
            {
            "indexed": false,
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
        },
        {
        "anonymous": false,
        "inputs": [
            {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
            }
        ],
        "name": "Paused",
        "type": "event"
        },
        {
        "anonymous": false,
        "inputs": [
            {
            "indexed": true,
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
            },
            {
            "indexed": true,
            "internalType": "address",
            "name": "solnAddress",
            "type": "address"
            }
        ],
        "name": "SolutionAdded",
        "type": "event"
        },
        {
        "anonymous": false,
        "inputs": [
            {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
            },
            {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
            },
            {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
        },
        {
        "anonymous": false,
        "inputs": [
            {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
            },
            {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
            }
        ],
        "name": "TransferOwnership",
        "type": "event"
        },
        {
        "anonymous": false,
        "inputs": [
            {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
            }
        ],
        "name": "Unpaused",
        "type": "event"
        },
        {
        "constant": false,
        "inputs": [
            {
            "internalType": "bytes32",
            "name": "_myid",
            "type": "bytes32"
            },
            {
            "internalType": "string",
            "name": "_result",
            "type": "string"
            }
        ],
        "name": "__callback",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "constant": false,
        "inputs": [
            {
            "internalType": "bytes32",
            "name": "_myid",
            "type": "bytes32"
            },
            {
            "internalType": "string",
            "name": "_result",
            "type": "string"
            },
            {
            "internalType": "bytes",
            "name": "_proof",
            "type": "bytes"
            }
        ],
        "name": "__callback",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "constant": false,
        "inputs": [
            {
            "internalType": "address",
            "name": "to",
            "type": "address"
            },
            {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "constant": true,
        "inputs": [
            {
            "internalType": "address",
            "name": "owner",
            "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
        },
        {
        "constant": true,
        "inputs": [],
        "name": "baseTokenURI",
        "outputs": [
            {
            "internalType": "string",
            "name": "",
            "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
        },
        {
        "constant": true,
        "inputs": [
            {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
            }
        ],
        "name": "getApproved",
        "outputs": [
            {
            "internalType": "address",
            "name": "",
            "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
        },
        {
        "constant": true,
        "inputs": [
            {
            "internalType": "address",
            "name": "owner",
            "type": "address"
            },
            {
            "internalType": "address",
            "name": "operator",
            "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [
            {
            "internalType": "bool",
            "name": "",
            "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
        },
        {
        "constant": true,
        "inputs": [],
        "name": "isPaused",
        "outputs": [
            {
            "internalType": "bool",
            "name": "",
            "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
        },
        {
        "constant": false,
        "inputs": [
            {
            "internalType": "address",
            "name": "to",
            "type": "address"
            },
            {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
            }
        ],
        "name": "mint",
        "outputs": [
            {
            "internalType": "bool",
            "name": "",
            "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
            "internalType": "string",
            "name": "",
            "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
        },
        {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
            "internalType": "address",
            "name": "",
            "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
        },
        {
        "constant": true,
        "inputs": [
            {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
            }
        ],
        "name": "ownerOf",
        "outputs": [
            {
            "internalType": "address",
            "name": "",
            "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
        },
        {
        "constant": false,
        "inputs": [
            {
            "internalType": "address",
            "name": "from",
            "type": "address"
            },
            {
            "internalType": "address",
            "name": "to",
            "type": "address"
            },
            {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "constant": false,
        "inputs": [
            {
            "internalType": "address",
            "name": "from",
            "type": "address"
            },
            {
            "internalType": "address",
            "name": "to",
            "type": "address"
            },
            {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
            },
            {
            "internalType": "bytes",
            "name": "_data",
            "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "constant": false,
        "inputs": [
            {
            "internalType": "address",
            "name": "to",
            "type": "address"
            },
            {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "constant": false,
        "inputs": [
            {
            "internalType": "bool",
            "name": "pause",
            "type": "bool"
            }
        ],
        "name": "setPaused",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "constant": true,
        "inputs": [
            {
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
            "internalType": "bool",
            "name": "",
            "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
        },
        {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
            "internalType": "string",
            "name": "",
            "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
        },
        {
        "constant": true,
        "inputs": [
            {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
            }
        ],
        "name": "tokenByIndex",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
        },
        {
        "constant": true,
        "inputs": [
            {
            "internalType": "address",
            "name": "owner",
            "type": "address"
            },
            {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
            }
        ],
        "name": "tokenOfOwnerByIndex",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
        },
        {
        "constant": true,
        "inputs": [
            {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
            }
        ],
        "name": "tokenURI",
        "outputs": [
            {
            "internalType": "string",
            "name": "",
            "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
        },
        {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
        },
        {
        "constant": false,
        "inputs": [
            {
            "internalType": "address",
            "name": "from",
            "type": "address"
            },
            {
            "internalType": "address",
            "name": "to",
            "type": "address"
            },
            {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "constant": false,
        "inputs": [
            {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "constant": false,
        "inputs": [
            {
            "internalType": "uint256[2]",
            "name": "a",
            "type": "uint256[2]"
            },
            {
            "internalType": "uint256[2][2]",
            "name": "b",
            "type": "uint256[2][2]"
            },
            {
            "internalType": "uint256[2]",
            "name": "c",
            "type": "uint256[2]"
            },
            {
            "internalType": "uint256[2]",
            "name": "input",
            "type": "uint256[2]"
            }
        ],
        "name": "addSolution",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "constant": false,
        "inputs": [
            {
            "internalType": "uint256[2]",
            "name": "input",
            "type": "uint256[2]"
            },
            {
            "internalType": "address",
            "name": "to",
            "type": "address"
            }
        ],
        "name": "mintVerifiedToken",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
        }
    ]

</details>

## Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
