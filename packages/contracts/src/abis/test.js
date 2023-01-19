const { expect }=require("chai");
const { ethers }=require("hardhat");

describe("UniswapV2 Test Suite", () => {
    let token;
    let liquidityPool;
    let router;
    let user1;
    let user2;

    before(async () => {
        [user1, user2]=await ethers.getSigners();

        token=await ethers.deploy("MyToken", [1000000000], {
            gasLimit: 1000000
        });

        liquidityPool=await ethers.deploy("MyLiquidityPool", [token.address], {
            gasLimit: 1000000
        });

        router=await ethers.deploy("UniswapV2Router02", [liquidityPool.address], {
            gasLimit: 1000000
        });
    });

    it("should deploy the token contract, liquidity pool, and router", async () => {
        expect(token.address).to.not.be.null;
        expect(liquidityPool.address).to.not.be.null;
        expect(router.address).to.not.be.null;
    });

    it("should allow user1 to add liquidity to the pool", async () => {
        await token.connect(user1).approve(liquidityPool.address, 100);
        await liquidityPool.connect(user1).addLiquidity(100);

        const liquidity=await liquidityPool.getLiquidity();
        expect(liquidity).to.eq(100);
    });

    it("should allow user1 to trade 100 tokens for ether using the router", async () => {
        const initialEtherBalance=await ethers.provider.getBalance(user1.address);
        await token.connect(user1).approve(router.address, 100);
        await router.connect(user1).swapExactTokensForETH(100, 1, [user1.address], {
            value: 100
        });
        const finalEtherBalance=await ethers.provider.getBalance(user1.address);
        expect(finalEtherBalance.sub(initialEtherBalance)).to.be.above(99);
    });
});
