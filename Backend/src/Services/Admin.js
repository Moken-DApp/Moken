const { v4: uuid } = require("uuid");
require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class Admin {
    async Register(email, name, pass) {
        const id = uuid();

        //Verificação de senha != "", e HASH da mesma
        if (pass) {
            const hashedPassWord = await bcrypt.hash(pass, 8);

            pass = hashedPassWord;
        }

        //Verificação de email já cadastrado
        const emailAlreadyInUse = await prisma.admin.findMany({
            where: {
                email: email,
            },
        });

        if (emailAlreadyInUse.length > 0) {
            throw new Error("Email já cadastrado");
        }

        try {
            const result = await prisma.admin.create({
                data: {
                    id: id,
                    name: name,
                    email: email,
                    password: pass,
                },
            });
            return result;
        } catch (err) {
            throw new Error(err.message);
        }
    }

    async AuthAdmin(email, pass) {
        //Requisição de busca na tabela "users" para verificar a existência de um usuário com o email indicado no LOGIN
        const user = await prisma.admin.findUnique({
            where: {
                email: email,
            },
        });

        console.log(user);

        if (!user) {
            throw new Error("Email ou Senha inválidos");
        }

        //Verificar se a senha inserida corresponde a do usuário
        let passwordMatch = await bcrypt.compare(pass, user.password);

        if (!passwordMatch) {
            throw new Error("Email ou Senha inválidos");
        }

        //Gera o token de segurança do usuário, que possui tempo de expiração
        let token;

        token = jwt.sign(
            {
                email: user.email,
            },
            "4b0d30a9f642b3bfff67d0b5b28371a9",
            {
                subject: user.id,
                expiresIn: "1h",
            }
        );

        return {
            message: "Validated Credentials. Admin Logged",
            token: token,
        };
    }

    async getInfos(id) {
        try {
            const infos = await prisma.admin.findUnique({
                where: {
                    id: id,
                },
                select: {
                    name: true,
                    email: true,
                    createdAt: true,
                    id: true,
                    wallet: true,
                },
            });

            infos.isAdmin = true;

            return infos;
        } catch (err) {
            throw new Error(err.message);
        }
    }
}

module.exports = {
    Admin,
};
