const { v4: uuid } = require('uuid');
require('dotenv').config();

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

class Propertie {
    async createPropertie(title, currentPrice, type, owner) {
        console.log(title, currentPrice, type, owner);
    
        try {
            const result = await prisma.propetie.create({
                data: {
                    id: uuid(),
                    title: title,
                    currentPrice: parseFloat(currentPrice),
                    type: type,
                    owner: owner,
                }
            })
            return result;
        } catch (err){
            throw new Error(err.message);
        }
    }

    async deletePropertie(id) {

        id = Number(id);

        try {
            const result = await prisma.propetie.delete({
                where: {id: id}
            })
            return result;
        } catch (err){
            throw new Error(err.message);
        }
    }

    async updatePropertie(id, title, currentPrice, type, owner) {
        let data = {}

        if(title) {
            data.title = title;
        }
        if(currentPrice) {
            data.currentPrice = parseFloat(currentPrice);
        }
        if(type) {
            data.type = type;
        }
        if(owner) {
            data.owner = owner;
        } 
        
        if (!(title || currentPrice || type || owner)) {
            throw new Error("Nenhum dado para atualizar");
        }

        try {
            const result = await prisma.propetie.update({
                where: {id: id},
                data: data
            })
            data = {};
            return result;
        } catch (err){
            throw new Error(err.message);
        }
    }

    async getProperties() {
        try {
            const result = await prisma.propetie.findMany({
                include: {
                    offers: true,
                },
            })
            return result;
        } catch (err){
            throw new Error(err.message);
        }
    }

    async trasnferPropertie(id, newOwner) {
        try {
            const result = await prisma.propetie.update({
                where: {id: id},
                data: {
                    owner: newOwner,
                    sold: true,
                    onSale: false,
                }
            })
            return result;
        } catch (err){
            throw new Error(err.message);
        }
    }
}

module.exports = {
    Propertie,
}