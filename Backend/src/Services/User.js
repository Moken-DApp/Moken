const { v4: uuid } = require('uuid');
require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class User {
    async saveWallet(wallet) {
        //Gera o token de segurança do usuário, que possui tempo de expiração
        let token

        token = jwt.sign({
            wallet: wallet
        }, "3c353a34bb6ecf261b49db8ba1293577", {
            subject: wallet,
            expiresIn: "1h"
        });

        return token
    }

    async verifyWallet(authToken) {

        let token = null

        //Valida se o token está preenchido
        if (!authToken) {
            res.status(401).json({
                message: "Você precisa de um token para acessar essa ação"
            })
            return
        }

        //Desestrutura o header "Bearer 'token'"
        [, token] = authToken.split(" ")

        //Valida se o token é válido
        try {
            //Verifica o Token
            const { sub } = jwt.verify(token, "3c353a34bb6ecf261b49db8ba1293577")

            //Recupera infos do usuário
            let wallet = sub
            return wallet;
        } catch(err) {
            //Retorna o erro caso o token não seja válido
            throw new Error("Usuário não autenticado");
        }
    }
}

module.exports = {
    User,
}