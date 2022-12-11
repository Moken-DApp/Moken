require("@nomiclabs/hardhat-waffle");

// Initialize `dotenv` with the `.config()` function
require("dotenv").config({ path: ".env" });

// Environment variables should now be available
// under `process.env`
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const RPC_URL = process.env.RPC_URL;

// Show an error if environment variables are missing
if (!PRIVATE_KEY) {
    console.error("Missing PRIVATE_KEY environment variable");
}

if (!RPC_URL) {
    console.error("Missing RPC_URL environment variable");
}

// Add the alfajores network to the configuration
module.exports = {
    solidity: "0.8.4",
    path: {
        sources: "./contracts",
    },
    networks: {
        alfajores: {
            url: process.env.RPC_URL,
            accounts: [
                process.env.PRIVATE_KEY ||
                    "6b0ee8c3f100e9a4bde14f0407998ca84e2e7915baba4354ffcca1f0f7fda96c",
            ],
            allowUnlimitedContractSize: true,
        },
    },
};
