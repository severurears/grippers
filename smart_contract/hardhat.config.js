require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/wrdCc2z6Ml-1sRl5PScAPbbxE4qOLBVR',
      accounts: [ 'd4804e93330100c8b212c4ccf2046ae81dcdd307bea536c88d659853b3e396d0' ]
    }
  },
  solidity: "0.8.19",
};
