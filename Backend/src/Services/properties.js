// const { v4: uuid } = require('uuid');
require('dotenv').config();

const axios = require("axios");
const contracts = require('../../utils/consumeContracts');

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class Propertie {
    async createPropertie(linkImage, linkDoc, description, type, address, especification) {
        const object = {
            linkDoc: linkDoc,
            linkImage: linkImage,
            description: description,
            type: type,
            address: address,
            specification: especification
        }

        let generatedLink = "";

        try {
            await axios({
                method: "post",
                url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
                data: JSON.stringify(object),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.JWT_PINATA}`
                },
            }).then((data) => {
                generatedLink  = `https://ipfs.io/ipfs/${data.data.IpfsHash}`
            })
        } catch (err) {
            throw new Error(err.message)
        }

        let tokenAddress = "";

        try {
            await contracts.createProperty(generatedLink, String(especification.rip));
        } catch (err) {
            throw new Error(err.message);
        }

        try {
            tokenAddress = await contracts.getTokenAdr(String(especification.rip));
        } catch (err) {
            throw new Error(err.message);
        }

        try {
            await prisma.cpfToken.create({
                data: {
                    tokenAddress: tokenAddress,
                    cpfOwner: "00000000000",
                    ownerAddress: "0x0000000000000000000000000000000000000000",
                    atual: true
                },
            });
        } catch (err) {
            console.log(err.message)
            throw new Error(err.message);
        }

        return generatedLink;
    }

    async getProperty(rip) {
        try {
            const response = await contracts.getProperty(rip);
            if (response == "") {
                throw new Error("Propriedade não encontrada");
            } else {
                return response;
            }
        } catch (err) {
            throw new Error(err.message);
        }
    }
            
    async getProperties() {
        try {
            const response = await contracts.getAllProperties();
            if (response == "") {
                throw new Error("Propriedade não encontrada");
            } else {
                return response;
            }
        } catch (err) {
            throw new Error(err.message);
        }
    }
}

module.exports = {
    Propertie,
};
