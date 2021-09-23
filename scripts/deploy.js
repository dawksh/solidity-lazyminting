async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account: ", deployer.address);
  console.log("Account Balance: ", (await deployer.getBalance()).toString());
  const Token = await hre.ethers.getContractFactory("MyNFT");
  const token = await Token.deploy();

  console.log("Contract address: ", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
