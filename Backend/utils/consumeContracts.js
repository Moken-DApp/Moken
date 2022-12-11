const dotenv = require('dotenv').config();

const { CeloProvider } = require('@celo-tools/celo-ethers-wrapper');

const { Contract, ethers, utils, providers } = require('ethers');

const storage = require('../../Backend/hardhat/artifacts/contracts/Property.sol/Property.json');

const address = require('../hardhat/utils/contractsAddresses.json');

const { CeloWallet } = require('@celo-tools/celo-ethers-wrapper');

async function createProperty(URI, rip) {
    console.log(URI, rip)
    const provider = new CeloProvider('https://alfajores-forno.celo-testnet.org');

    await provider.ready;

    const wallet = new CeloWallet("cd880186895b944b4d822a51df9fb01ffc3405cc24d2dc31a99bb35c0686afa3", provider);

    const contract = new ethers.Contract(
        address.addresses[0].InteliFactory, 
        storage.abi, 
        wallet
    );

    const response = await contract.createProperty(URI, rip);

    return response;
}

async function getProperty(id) {
    const provider = new CeloProvider('https://alfajores-forno.celo-testnet.org');

    await provider.ready;

    const wallet = new CeloWallet("cd880186895b944b4d822a51df9fb01ffc3405cc24d2dc31a99bb35c0686afa3", provider);

    const contract = new ethers.Contract(
        address.addresses[0].InteliFactory, 
        storage.abi, 
        wallet
    );

    const response = await contract.getProperty(id);

    return response;
}


module.exports = {
    createProperty
};