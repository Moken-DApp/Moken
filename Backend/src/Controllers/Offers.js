const { validationResult } = require('express-validator')
const offer = require('../Services/Offers.js');
require('express-async-errors')

const Offer = new offer.Offer()

const createOffer = async (req, res) => {
    //Pega as infos da requisição
    const { idPropertie, wallet, price, brlPrice } = req.body
    //Valida se algum paremetro é inválido
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: errors.errors[0].msg,
        })
    }

    try {
        //Tratamento das respostas do método da classe
        const result = await Offer.createOffer(idPropertie, wallet, price, brlPrice);
        res.send(result)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

//Exporta as funções do controller para o ROUTER
module.exports = {
    createOffer,
}