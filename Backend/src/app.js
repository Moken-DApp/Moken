const express = require("express");
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

const propetieRouter = require("./Routes/Properties.js");
const offerRouter = require("./Routes/Offers.js");
const adminRouter = require("./Routes/Admin.js");
const userRouter = require("./Routes/User.js");

app.use('/Propertie', propetieRouter);
app.use('/Offer', offerRouter);
app.use('/Admin', adminRouter);
app.use('/User', userRouter);


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
