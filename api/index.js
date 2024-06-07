const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
mongoose
    .connect(process.env.MONGO)
    .then(() => console.log("MongoDb connect success"))
    .catch((error) => {
        console.log("mongoDb connect error: ", error);
    });

const app = express();

app.listen(3000, () => {
    console.log("listening on port: 3000!!!");
});
