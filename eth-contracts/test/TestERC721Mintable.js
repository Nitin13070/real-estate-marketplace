var ERC721MintableComplete = artifacts.require('ERC721MintableComplete');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    const account_three = accounts[2];
    const account_four= accounts[4];


    describe('match erc721 spec', function () {
        
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});

            // TODO: mint multiple tokens
            await this.contract.mint(account_two, 1);
            await this.contract.mint(account_three, 2);
        })

        it('should return total supply', async function () { 
            let totalSupply = await this.contract.totalSupply();
            assert.equal(totalSupply.toNumber(), 2, "Incorrect TotalSupply");
        })

        it('should get token balance', async function () { 
            let balance = await this.contract.balanceOf(account_two);
            assert.equal(balance.toNumber(), 1, "Incorrect Token Balance of User.");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let tokenUri = await this.contract.tokenURI(1);
            assert.equal(tokenUri, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1", "Incorrect Token URI");
        })

        it('should transfer token from one owner to another', async function () { 
            await this.contract.mint(account_four, 3);
            
            let tokenOwner = await this.contract.ownerOf(3);
            assert.equal(tokenOwner, account_four, "Incorrect Token Owner Before Transfer");
            
            let balance = await this.contract.balanceOf(account_four);
            assert.equal(balance.toNumber(), 1, "Incorrect Token Balance of User before Transfer");

            await this.contract.transferFrom(account_four, account_two, 3, {from: account_four});

            tokenOwner = await this.contract.ownerOf(3);
            assert.equal(tokenOwner, account_two, "Incorrect Token Owner after Transfer");

            balance = await this.contract.balanceOf(account_four);
            assert.equal(balance.toNumber(), 0, "Incorrect Token Balance of User after Transfer.");

            balance = await this.contract.balanceOf(account_two);
            assert.equal(balance.toNumber(), 2, "Incorrect Token Balance of User after Transfer.");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            let isFailed = false;
            try {
                await this.contract.mint(account_two, 1, {from: account_two});
            } catch(e) {
                isFailed = true;
            }
            assert.equal(isFailed, true, "minting token must fail when not owner.");
        })

        it('should return contract owner', async function () { 
            let contractOwner = await this.contract.owner();

            assert.equal(contractOwner, account_one, "Incorrect Contract Owner.");
        })

        it('transfer contract ownership', async function() {
            await this.contract.transferOwnership(account_two, {from: account_one});

            let contractOwner = await this.contract.owner();
            assert.equal(contractOwner, account_two, "Incorrect Contract Owner.");
        });

        it('validate pausable contract', async function() {

            await this.contract.setPaused(true, {from: account_one});

            let isFailed = false;

            try {
                await this.contract.mint(account_four, 5);
            } catch(e) {
                isFailed = true;
            }
            assert.equal(isFailed, true, "Contract operation must fail when paused.");

            await this.contract.setPaused(false, {from: account_one});

            await this.contract.mint(account_four, 5);
        });

    });

})