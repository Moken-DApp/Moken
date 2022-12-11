// const { v4: uuid } = require('uuid');
require('dotenv').config();

const axios = require("axios");
const contracts = require('../../utils/consumeContracts');

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

        console.log(especification.rip)

        let generatedLink = "";

        try {
            await axios({
                method: "post",
                url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
                data: JSON.stringify(object),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIxZjBhMWFhYy0xYTI2LTRhYmItOTBkZi1mOTk2N2I3ZDAyYjMiLCJlbWFpbCI6ImZlaXRvemEubWFyY2VsbzdAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjAwYTA2YWJkNjYxOTBhNTc0M2UwIiwic2NvcGVkS2V5U2VjcmV0IjoiYzBhMzcyNDgxZjVmNmUwMTc2YzhmMGE1MTY4ZDlhNTgxYWU1Nzk5MjAzYWJlYWUzZjY0MTg2MWY5MzNjNTVhNSIsImlhdCI6MTY3MDcwOTY3OX0.S39tt-Owbc62mR7RCeaqPM4QTBL9p76l2-agHS3898A`
                },
            }).then((data) => {
                generatedLink  = `https://ipfs.io/ipfs/${data.data.IpfsHash}`
            })
        } catch (err) {
            throw new Error(err.message)
        }

        try {
            await contracts.createProperty(generatedLink, String(especification.rip));
            return generatedLink;
        } catch (err) {
            throw new Error(err.message);
        }
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

    async getProperties() {
        try {
            const result = await prisma.propetie.findMany({
                include: {
                    offers: true,
                },
            });
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
