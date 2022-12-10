const { validationResult } = require('express-validator')
const offer = require('../Services/Offers.js');
require('express-async-errors')

const Offer = new offer.Offer()

const createOffer = async (req, res) => {
    //Pega as infos da requisição
    const { tokenAddress, price, type, accessWallet } = req.body
    //Valida se algum paremetro é inválido
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: errors.errors[0].msg,
        })
    }

    try {
        //Tratamento das respostas do método da classe
        const result = await Offer.createOffer(tokenAddress, type, price, accessWallet);
        res.send(result)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

const getOfferByTokenAddress = async (req, res) => {
    //Pega as infos da requisição
    const { tokenAddress } = req.params
    //Valida se algum paremetro é inválido
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: errors.errors[0].msg,
        })
    }

    try {
        //Tratamento das respostas do método da classe
        const result = await Offer.getOfferByTokenAddress(tokenAddress);
        res.send(result)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

const getOfferById = async (req, res) => {
    //Pega as infos da requisição
    const { id } = req.params
    //Valida se algum paremetro é inválido
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: errors.errors[0].msg,
        })
    }

    try {
        //Tratamento das respostas do método da classe
        const result = await Offer.getOfferById(id);
        res.send(result)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

const getAllPublicOffers = async (req, res) => {
    try {
        //Tratamento das respostas do método da classe
        const result = await Offer.getAllPublicOffers();
        res.send(result)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

const deleteOfferById = async (req, res) => {
    //Pega as infos da requisição
    const { id } = req.params
    //Valida se algum paremetro é inválido
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: errors.errors[0].msg,
        })
    }

    try {
        //Tratamento das respostas do método da classe
        const result = await Offer.deleteOfferById(id);
        res.send(result)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

const deleteOfferByTokenAddress = async (req, res) => {
    //Pega as infos da requisição
    const { tokenAddress } = req.params
    //Valida se algum paremetro é inválido
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: errors.errors[0].msg,
        })
    }

    try {
        //Tratamento das respostas do método da classe
        const result = await Offer.deleteOfferByTokenAddress(tokenAddress);
        res.send(result)
    } catch (err) {
        res.status(500).send(err.message)
    }
}


//Exporta as funções do controller para o ROUTER
module.exports = {
    createOffer,
    getOfferByTokenAddress,
    getOfferById,
    getAllPublicOffers,
    deleteOfferById,
    deleteOfferByTokenAddress
}