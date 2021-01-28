require('dotenv').config();
const mongoose = require("mongoose");
const credentials = require('./Credentials');

const URI = process.env.MONGODB_URI || credentials.URI;

const connectDB = async () => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
    console.log("DB connected");
};

module.exports = connectDB;