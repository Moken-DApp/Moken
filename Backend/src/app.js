const express = require('express');
require("express-async-errors");
require("dotenv").config();
var bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json()); //Irá suportar JSON
app.use(
  bodyParser.urlencoded({
    // Irá suportar urlenconded
  })
);

const PORT = process.env.PORT || 3001;

const propetieRouter = require('./Routes/properties.js');
const offerRouter = require('./Routes/Offers.js');

app.use('/Propertie', propetieRouter);
app.use('/Offer', offerRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
