const express = require('express');
const router = express.Router();
const { body, param } = require("express-validator");

const propertieController = require("../Controllers/properties.js");


//Criar registro de palestra e todos os alunos que participaram
router.post(
    "/createPropertie",
    [body("title", "Titulo da Propriedade é necessário").exists({ checkFalsy: true })],
    [body("currentPrice", "Preço atual da Propriedade é necessário").exists({ checkFalsy: true })],
    [body("type", "Tipo da Propriedade é necessário").exists({ checkFalsy: true })],
    [body("owner", "Dono da Propriedade é necessário").exists({ checkFalsy: true })],
    propertieController.createPropertie
);

router.delete(
    "/deletePropertie/:id",
    [param("id", "ID da Propriedade é necessário").exists({ checkFalsy: true })],
    propertieController.deletePropertie
);

router.put(
    "/updatePropertie/:id",
    propertieController.updatePropertie
);

router.get(
    "/getProperties",
    propertieController.getProperties
);

//Exporta o ROUTER
module.exports = router;
