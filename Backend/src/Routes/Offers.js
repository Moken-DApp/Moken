const express = require("express");
const router = express.Router();
const { body, param } = require("express-validator");

const offerController = require("../Controllers/Offers.js");

//Criar registro de palestra e todos os alunos que participaram
router.post(
    "/createOffer",
    [
        body("price", "Preço da Oferta é necessário").exists({
            checkFalsy: true,
        }),
    ],
    [
        body("tokenAddress", "Endereço do Token da Oferta é necessário").exists(
            { checkFalsy: true }
        ),
    ],
    [body("type", "Tipo da Oferta é necessário").exists({ checkFalsy: true })],
    offerController.createOffer
);

router.get(
    "/getOfferById/:id",
    [param("id", "ID da Oferta é necessário").exists({ checkFalsy: true })],
    offerController.getOfferById
);

router.get(
    "/getOfferByTokenAddress/:tokenAddress",
    [
        param(
            "tokenAddress",
            "Endereço do Token da Oferta é necessário"
        ).exists({ checkFalsy: true }),
    ],
    offerController.getOfferByTokenAddress
);

router.get("/getAllPublicOffers", offerController.getAllPublicOffers);

router.delete(
    "/deleteOfferById/:id",
    [param("id", "ID da Oferta é necessário").exists({ checkFalsy: true })],
    offerController.deleteOfferById
);

router.delete(
    "/deleteOfferByTokenAddress/:tokenAddress",
    [
        param(
            "tokenAddress",
            "Endereço do Token da Oferta é necessário"
        ).exists({ checkFalsy: true }),
    ],
    offerController.deleteOfferByTokenAddress
);

//Exporta o ROUTER
module.exports = router;
