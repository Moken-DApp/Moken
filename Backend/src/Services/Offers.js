const { v4: uuid } = require('uuid');
require('dotenv').config();

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

class Offer {
    async createOffer(idPropertie, wallet, price, brlPrice) {

        //Verifica se a propriedade existe
        const existsProp = await prisma.propetie.findUnique({
            where: {id: idPropertie}
        })

        if (!existsProp) {
            throw new Error("Propriedade não existe");
        }

        //Verifica se a carteira que quer fazer oferta é diferente da do proprietário
        if (existsProp.owner === wallet) {
            throw new Error("Proprietário não pode fazer oferta");
        }

        //Verifica se a casa está a venda
        if(existsProp.onSale === false) {
            throw new Error("Propriedade não está a venda");
        }

        //Verifica se a casa já foi vendida
        if(existsProp.sold === true) {
            throw new Error("Propriedade já foi vendida");
        }

        //Caso tudo tenha sido respeitado cria-se a oferta para aquela casa
        try {
            const result = await prisma.offer.create({
                data: {
                    propertyId: idPropertie,
                    wallet: wallet,
                    price: parseFloat(price),
                    brlPrice: parseFloat(brlPrice),
                }
            })
            return result;
        } catch (err){
            throw new Error(err.message);
        }
    }
}

module.exports = {
    Offer,
}