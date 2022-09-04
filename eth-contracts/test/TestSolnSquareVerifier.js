// Test if a new solution can be added for contract - SolnSquareVerifier

// Test if an ERC721 token can be minted for contract - SolnSquareVerifier

var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
var Verifier = artifacts.require('Verifier');
const {proof, inputs} = require('./proof.json');

contract('TestSolnSquareVerifier', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    
    describe('validate solution and mint token', function() {
        beforeEach(async function() {
            let verifier = await Verifier.new({from: account_one});
            this.contract = await SolnSquareVerifier.new(verifier.address, {from: account_one});
        });

        it('Test Add Solution and Mint Token Successfull', async function() {

            await this.contract.addSolution(proof.a, proof.b, proof.c, inputs, {from: account_two});

            await this.contract.mintVerifiedToken(inputs, account_two, {from: account_one});

            let totalSupply = await this.contract.totalSupply();
            assert.equal(totalSupply.toNumber(), 1, "Incorrect TotalSupply");

            let tokenOwner = await this.contract.ownerOf(1);
            assert.equal(tokenOwner, account_two, "Incorrect Token Owner.");

            let balance = await this.contract.balanceOf(account_two);
            assert.equal(balance.toNumber(), 1, "Incorrect Token Balance of User");
        });

        it('Test Mint Token with un-verified solution.', async function() {
            let isFailed = false;
            try {
                await this.contract.mintVerifiedToken(inputs, account_two, {from: account_one});
            } catch(e) {
                isFailed = true;
            }
            assert.equal(isFailed, true, "Mint Token must fail.")

            let totalSupply = await this.contract.totalSupply();
            assert.equal(totalSupply.toNumber(), 0, "Incorrect TotalSupply");

            let balance = await this.contract.balanceOf(account_two);
            assert.equal(balance.toNumber(), 0, "Incorrect Token Balance of User");
        });

        it('Test Mint Token with already used solution.', async function() {
            await this.contract.addSolution(proof.a, proof.b, proof.c, inputs, {from: account_two});

            await this.contract.mintVerifiedToken(inputs, account_two, {from: account_one});

            let isFailed = false;
            try {
                await this.contract.mintVerifiedToken(inputs, account_two, {from: account_one});
            } catch(e) {
                isFailed = true;
            }
            assert.equal(isFailed, true, "Mint Token must fail.")

        });

    });
});