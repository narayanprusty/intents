import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    polygon: {
      url: process.env.POLYGON_MUMBAI_URL,
      accounts: [
        process.env.DEPLOYER_PRIVATE_KEY || "",
        process.env.USER_PRIVATE_KEY || ""
      ],
    },
  },
};

export default config;
