const { validationResult } = require('express-validator')
const user = require('../Services/User.js');
require('express-async-errors')

const User = new user.User()

const saveWallet = async (req, res) => {
    //Pega as infos da requisição
    const { wallet } = req.body

    //Valida se algum paremetro é inválido
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: errors.errors[0].msg,
        })
    }

    try {
        //Tratamento das respostas do método da classe
        const result = await User.saveWallet(wallet);
        res.send(result)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

const verifyWallet = async (req, res) => {

    authToken = req.headers.authorization;

    try {
        //Tratamento das respostas do método da classe
        const result = await User.verifyWallet(authToken);
        res.send(result)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

//Exporta as funções do controller para o ROUTER
module.exports = {
    saveWallet,
    verifyWallet
}