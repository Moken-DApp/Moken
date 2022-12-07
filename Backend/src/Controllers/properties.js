const { validationResult } = require('express-validator')
const propertie = require('../Services/properties.js');
require('express-async-errors')

const Propertie = new propertie.Propertie()

const createPropertie = async (req, res) => {
    //Pega as infos da requisição
    const { title, currentPrice, type, owner } = req.body
    //Valida se algum paremetro é inválido
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: errors.errors[0].msg,
        })
    }

    try {
        //Tratamento das respostas do método da classe
        const result = await Propertie.createPropertie(title, currentPrice, type, owner);
        res.send(result)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

const deletePropertie = async (req, res) => {
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
        const result = await Propertie.deletePropertie(id);
        res.send(result)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

const updatePropertie = async (req, res) => {
    //Pega o ID da propriedade através do parametro da URL
    const { id_prop } = req.params

    //Pega as infos da requisição
    const { title, currentPrice, type, owner } = req.body

    try {
        //Tratamento das respostas do método da classe
        const result = await Propertie.updatePropertie(id_prop, title, currentPrice, type, owner);
        res.send(result)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

const getProperties = async (req, res) => {
    try {
        //Tratamento das respostas do método da classe
        const result = await Propertie.getProperties();
        res.send(result)
    } catch (err) {
        res.status(500).send(err.message)
    }
}


//Exporta as funções do controller para o ROUTER
module.exports = {
    createPropertie, 
    deletePropertie,
    updatePropertie,
    getProperties
}