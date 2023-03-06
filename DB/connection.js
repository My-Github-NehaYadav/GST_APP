const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const CONNECTION_URL = process.env.CONNECTION_URL;

try {
    mongoose.connect(CONNECTION_URL);
    console.log('db connection successfully.')
} catch (error) {
    console.log(error);
}