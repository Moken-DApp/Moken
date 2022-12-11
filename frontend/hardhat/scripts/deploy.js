const { ethers } = require("hardhat");

async function main() {
    let contract = await ethers.getContractFactory("Property");

    let contractWithSigner = await contract.deploy();

    await contractWithSigner.deployed();
    console.log("Contract deployed to:", contractWithSigner.address);
}

main()
    .then(() => {
        process.exit(0);
    })
    .catch(() => {
        process.exit(1);
    });
