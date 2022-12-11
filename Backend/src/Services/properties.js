// const { v4: uuid } = require('uuid');
require("dotenv").config();

const axios = require("axios");
const contracts = require("../../utils/consumeContracts");

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class Propertie {
    async createPropertie(
        linkImage,
        linkDoc,
        description,
        type,
        address,
        especification,
        cpfOwner
    ) {
        const object = {
            linkDoc: linkDoc,
            linkImage: linkImage,
            description: description,
            type: type,
            address: address,
            specification: especification,
        };

        let generatedLink = "";

        try {
            await axios({
                method: "post",
                url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
                data: JSON.stringify(object),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.JWT_PINATA}`,
                },
            }).then((data) => {
                generatedLink = `https://ipfs.io/ipfs/${data.data.IpfsHash}`;
            });
        } catch (err) {
            throw new Error(err.message);
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
                    atual: true,
                },
            });
        } catch (err) {
            console.log(err.message);
            throw new Error(err.message);
        }

        return generatedLink;
    }

    async getProperty(rip) {
        try {
            const response = await contracts.getProperty(rip);
            return response;
        } catch (err) {
            throw new Error(err.message);
        }
    }

    async deletePropertie(id) {
        id = Number(id);

        try {
            const result = await prisma.propetie.delete({
                where: { id: id },
            });
            return result;
        } catch (err) {
            throw new Error(err.message);
        }
    }

    async updatePropertie(id, title, currentPrice, type, owner) {
        let data = {};

        if (title) {
            data.title = title;
        }
        if (currentPrice) {
            data.currentPrice = parseFloat(currentPrice);
        }
        if (type) {
            data.type = type;
        }
        if (owner) {
            data.owner = owner;
        }

        if (!(title || currentPrice || type || owner)) {
            throw new Error("Nenhum dado para atualizar");
        }

        try {
            const result = await prisma.propetie.update({
                where: { id: id },
                data: data,
            });
            data = {};
            return result;
        } catch (err) {
            throw new Error(err.message);
        }
    }

    async getPropertyMetadata(id) {
        try {
            const result = await contracts.getPropertyMetadata(id);
            return result;
        } catch (err) {
            throw new Error(err.message);
        }
    }

    async getProperties() {
        // try {
        //     const result = await prisma.propetie.findMany({
        //         include: {
        //             offers: true,
        //         },
        //     });
        //     return result;
        // } catch (err) {
        //     throw new Error(err.message);
        // }
        try {
            const result = await contracts.getProperties();
            return result;
        } catch (err) {
            throw new Error(err.message);
        }
    }

    async trasnferPropertie(id, newOwner) {
        try {
            const result = await prisma.propetie.update({
                where: { id: id },
                data: {
                    owner: newOwner,
                    sold: true,
                    onSale: false,
                },
            });
            return result;
        } catch (err) {
            throw new Error(err.message);
        }
    }
}

module.exports = {
    Propertie,
};
