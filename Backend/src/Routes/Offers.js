const express = require('express');
const router = express.Router();
const { body, param } = require("express-validator");

const offerController = require("../Controllers/Offers.js");


//Criar registro de palestra e todos os alunos que participaram
router.post(
    "/createOffer",
    [body("idPropertie", "ID da Propriedade é necessário").exists({ checkFalsy: true })],
    [body("price", "Preço da Oferta é necessário").exists({ checkFalsy: true })],
    [body("wallet", "Carteira do dono da Oferta é necessário").exists({ checkFalsy: true })],
    [body("brlPrice", "Preço em reais da Oferta é necessário").exists({ checkFalsy: true })],
    offerController.createOffer
);

//Exporta o ROUTER
module.exports = router;
