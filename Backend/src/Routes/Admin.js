const express = require('express');
const router = express.Router();
const { body, param } = require("express-validator");

const adminController = require("../Controllers/Admin.js");

const unsureAdmin = require("../Middlewares/AdminAuth.js");


//Criar registro de palestra e todos os alunos que participaram
router.post(
    "/Register",
    [body("email", "Email é necessário").exists({ checkFalsy: true })],
    [body("name", "Nome é necessário").exists({ checkFalsy: true })],
    [body("senha", "Senha é necessário").exists({ checkFalsy: true })],
    adminController.Register
);

//Criar registro de palestra e todos os alunos que participaram
router.post(
    "/Login",
    [body("email", "Email é necessário").exists({ checkFalsy: true })],
    [body("senha", "Senha é necessário").exists({ checkFalsy: true })],
    adminController.Login
);

router.get(
    "/Infos",
    unsureAdmin.unsureAdmin,
    adminController.Infos
)

//Exporta o ROUTER
module.exports = router;
