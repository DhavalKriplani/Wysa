const mongoose = require("mongoose");
const credentials = require('./Credentials');

const URI = credentials.URI;

const connectDB = async () => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
    console.log("DB connected");
};

module.exports = connectDB;