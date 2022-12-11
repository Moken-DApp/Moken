const { validationResult } = require("express-validator");
const admin = require("../Services/Admin.js");
require("express-async-errors");

const Admin = new admin.Admin();

const Register = async (req, res) => {
    //Pega as infos da requisição
    const { email, name, senha } = req.body;
    //Valida se algum paremetro é inválido
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: errors.errors[0].msg,
        });
    }

    try {
        //Tratamento das respostas do método da classe
        const result = await Admin.Register(email, name, senha);
        res.send(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const Login = async (req, res) => {
    //Pega as infos da requisição
    const { email, senha } = req.body;
    //Valida se algum paremetro é inválido
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: errors.errors[0].msg,
        });
    }

    try {
        //Tratamento das respostas do método da classe
        const result = await Admin.AuthAdmin(email, senha);
        res.send(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const Infos = async (req, res) => {
    try {
        //Tratamento das respostas do método da classe
        const result = await Admin.getInfos(req.id);
        res.send(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

//Exporta as funções do controller para o ROUTER
module.exports = {
    Register,
    Login,
    Infos,
};
