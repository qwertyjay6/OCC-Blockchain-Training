const { ethers } = require("hardhat"); //hardhat runtime environment


async function main() {
  // Calculator Contract
  const calculatorContract = await ethers.deployContract("Calculator");
  await calculatorContract.waitForDeployment();
  console.log(`Calculator Contract deployed to: ${calculatorContract.target}`);

  // Calculator ContractV2
  const calculatorV2Contract = await ethers.deployContract("CalculatorV2");
  await calculatorV2Contract.waitForDeployment();
  console.log(
    `CalculatorV2 Contract deployed to: ${calculatorV2Contract.target}`
  );
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });