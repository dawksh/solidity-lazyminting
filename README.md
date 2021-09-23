# Lazy Minting Smart Contract

A smart contract to Lazy mint NFTs.

## Getting Started

Goto /contracts/LazyMintingNFT.sol and change the \_baseURI's return to your base api URL.

To deploy create a .env or change the `hardhat.config.js` in the root directory's entries with corresponding network's deployment URL and your private key.

Goto terminal and type `npx hardhat run scripts/deploy.js --network {Your desired network as configured in config file}` and hit enter. You should have your contract address in your terminal window.
