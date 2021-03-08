const Token = artifacts.require("StudyCoin");

const chai = require("./setupchai.js");
const BN = web3.utils.BN;
const expect = chai.expect;

require("dotenv").config({path: "../.env"});

contract("Token Test", async (accounts) => {

    const [deployerAccount, recipient, anotherAccount] = accounts;
   
    beforeEach(async() => {
        this.StudyCoin = await Token.new();
    })

    it("500 tokens should be in my account", async () => {
        let instance = this.StudyCoin;
        let totalSupply = await instance.totalSupply();
        
        return expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.equal("500000000000000000000");
    });

    it("10000 tokens should be in contract account", async () => {
        let instance = this.StudyCoin;
        return expect(instance.balanceOf(instance.address)).to.eventually.be.a.bignumber.equal("9500000000000000000000");
    });

    it("is possible to send tokens between accounts", async () => {
        const sendTokens = 1000000;
        
        let instance = this.StudyCoin;
        let balance = await instance.balanceOf(deployerAccount);
        console.log(balance)
        expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.equal("500000000000000000000");
        expect(instance.transfer(recipient, sendTokens)).to.eventually.be.fulfilled;
        expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.equal(balance.sub(new BN(sendTokens)));
        return expect(instance.balanceOf(recipient)).to.eventually.be.a.bignumber.equal(new BN(sendTokens));

    });

    it("is possible to send tokens between accounts", async () => {
        const sendTokens = 1000000;
        
        let instance = this.StudyCoin;
        let balance = await instance.balanceOf(deployerAccount);
        console.log(balance)
        expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.equal("500000000000000000000");
        expect(instance.transfer(recipient, sendTokens)).to.eventually.be.fulfilled;
        expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.equal(balance.sub(new BN(sendTokens)));
        return expect(instance.balanceOf(recipient)).to.eventually.be.a.bignumber.equal(new BN(sendTokens));

    });

    it("is not possible to send more tokens than available in total", async () => {
        let instance = this.StudyCoin;
        let balanceOfDeployer = await instance.balanceOf(deployerAccount);

        expect(instance.transfer(recipient, new BN(balanceOfDeployer+1))).to.eventually.be.rejected;

        return expect(instance.balanceOf(deployerAccount)).to.eventually.be.a.bignumber.equal(balanceOfDeployer);
    });

    it("buy tokens", async () => {
        let instance = this.StudyCoin;
        const weiAmount = new BN(5000000000000000);
    
        let buyTokens = await instance.buy({
            from: deployerAccount,
            value: web3.utils.toWei(0.005, "ether")
        });
    
        
    });

   

});