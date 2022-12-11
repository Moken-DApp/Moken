const dotenv = require("dotenv").config();

const { CeloProvider } = require("@celo-tools/celo-ethers-wrapper");

const { Contract, ethers, utils, providers } = require("ethers");
const axios = require("axios");

const storage = require("../../Backend/hardhat/artifacts/contracts/Property.sol/Property.json");

const address = require("../hardhat/utils/contractsAddresses.json");

const { CeloWallet } = require("@celo-tools/celo-ethers-wrapper");

async function createProperty(URI, rip) {
    console.log(URI, rip);
    const provider = new CeloProvider(
        "https://alfajores-forno.celo-testnet.org"
    );

    await provider.ready;

    const wallet = new CeloWallet(process.env.PRIVATE_KEY_CONTRACT, provider);

    const contract = new ethers.Contract(
        address.addresses[0].InteliFactory,
        storage.abi,
        wallet
    );

    const response = await contract.createProperty(URI, rip);

    return response;
}

async function getProperty(id) {
    const provider = new CeloProvider(
        "https://alfajores-forno.celo-testnet.org"
    );

    await provider.ready;

    const wallet = new CeloWallet(process.env.PRIVATE_KEY_CONTRACT, provider);

    const contract = new ethers.Contract(
        address.addresses[0].InteliFactory,
        storage.abi,
        wallet
    );

    const response = await contract.getTokenURIByRIP(id);

    return response;
}

// ESPECIAL
async function getPropertyMetadata(id) {
    const provider = new CeloProvider(
        "https://alfajores-forno.celo-testnet.org"
    );

    await provider.ready;

    const wallet = new CeloWallet(process.env.PRIVATE_KEY_CONTRACT, provider);

    const contract = new ethers.Contract(
        address.addresses[0].InteliFactory,
        storage.abi,
        wallet
    );

    const ipfsLink = await contract.getTokenURIByRIP(id).then((res) => {
        return res;
    });

    const response = await axios.get(ipfsLink).then((res) => {
        return res.data;
    });

    return response;
}

async function getProperties() {
    const provider = new CeloProvider(
        "https://alfajores-forno.celo-testnet.org"
    );

    await provider.ready;

    const wallet = new CeloWallet(process.env.PRIVATE_KEY_CONTRACT, provider);

    const contract = new ethers.Contract(
        address.addresses[0].InteliFactory,
        storage.abi,
        wallet
    );

    const response = await contract.getTokenURIs();

    return response;
}

module.exports = {
    createProperty,
    getProperty,
    getPropertyMetadata,
    getProperties,
};
