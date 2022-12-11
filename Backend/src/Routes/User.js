const express = require("express");
const router = express.Router();
const { body, param } = require("express-validator");

const userController = require("../Controllers/User.js");

const unsureAdmin = require("../Middlewares/AdminAuth.js");

//Criar registro de palestra e todos os alunos que participaram
router.post(
    "/saveWallet",
    [body("wallet", "Wallet é necessário").exists({ checkFalsy: true })],
    userController.saveWallet
);

router.get("/verifyWallet", userController.verifyWallet);

//Exporta o ROUTER
module.exports = router;
