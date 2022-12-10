const express = require('express');
const router = express.Router();
const { body, param } = require("express-validator");

const propertieController = require("../Controllers/properties.js");


//Criar registro de palestra e todos os alunos que participaram
router.post(
    "/createPropertie",
    [body("linkImage", "Titulo da Propriedade é necessário").exists({ checkFalsy: true })],
    [body("linkDoc", "Preço atual da Propriedade é necessário").exists({ checkFalsy: true })],
    [body("description", "Descrição da Propriedade é necessário").exists({ checkFalsy: true })],
    [body("type", "Tipo da Propriedade é necessário").exists({ checkFalsy: true })],
    [body("address", "Endereço da Propriedade é necessário").exists({ checkFalsy: true })],
    [body("especifications", "Especificação da Propriedade é necessário").exists({ checkFalsy: true })],
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
