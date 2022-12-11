const { ethers } = require("hardhat");

async function main() {
    let contract = await ethers.getContractFactory("Property");

    let contractWithSigner = await contract.deploy();

    await contractWithSigner.deployed();
    console.log("Contract deployed to:", contractWithSigner.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => {
        process.exit(0);
    })
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
