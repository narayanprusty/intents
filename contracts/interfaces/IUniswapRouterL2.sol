pragma solidity ^0.8.9;

interface IUniswapRouterL2 {
    struct ExactInputSingleParams {
        address tokenIn;
        address tokenOut;
        uint24 fee;
        address recipient;
        uint256 amountIn;
        uint256 amountOutMinimum;
        uint160 sqrtPriceLimitX96;
    }

   function exactInputSingle(ExactInputSingleParams memory params) external returns (uint256 amountOut);
}