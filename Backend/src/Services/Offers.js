const { v4: uuid } = require("uuid");
require("dotenv").config();

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class Offer {
    async createOffer(tokenAddress, type, price, accessWallet) {
        if (type == "private") {
            if (!accessWallet) {
                throw new Error("Endereço da carteira é necessário");
            }
        } else {
            accessWallet = "";
        }

        //Verifica se a propriedade existe
        //Chama contrato .sol

        //Caso tudo tenha sido respeitado cria-se a oferta para aquela propriedade
        try {
            const result = await prisma.offer.create({
                data: {
                    tokenAddress: tokenAddress,
                    type: type,
                    price: parseFloat(price),
                    accessWallet: accessWallet,
                    id: uuid(),
                },
            });
            return result;
        } catch (err) {
            throw new Error(err.message);
        }
    }

    async getOfferByTokenAddress(tokenAddress) {
        try {
            const result = await prisma.offer.findMany({
                where: {
                    tokenAddress: tokenAddress,
                },
            });
            return result;
        } catch (err) {
            throw new Error(err.message);
        }
    }

    async getOfferById(id) {
        try {
            const result = await prisma.offer.findUnique({
                where: {
                    id: id,
                },
            });
            return result;
        } catch (err) {
            throw new Error(err.message);
        }
    }

    async getAllPublicOffers() {
        try {
            const result = await prisma.offer.findMany({
                where: {
                    type: "public",
                },
            });
            return result;
        } catch (err) {
            throw new Error(err.message);
        }
    }

    async deleteOfferById(id) {
        try {
            const result = await prisma.offer.delete({
                where: {
                    id: id,
                },
            });
            return result;
        } catch (err) {
            throw new Error(err.message);
        }
    }

    async deleteOfferByTokenAddress(tokenAddress) {
        try {
            const result = await prisma.offer.deleteMany({
                where: {
                    tokenAddress: tokenAddress,
                },
            });
            return result;
        } catch (err) {
            throw new Error(err.message);
        }
    }
}

module.exports = {
    Offer,
};
