const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const EHB = require('express-handlebars');
const connectDB = require('./Connection');
const app = express();
const Port = process.env.PORT || 3000;

// Handler Imports
const accountsInteraction = require('./handlers/AccountsInteraction');
const devicesInteraction = require('./handlers/DevicesInteraction');
const exercisesInteraction = require('./handlers/ExercisesInteraction');
const journalInteraction = require('./handlers/JournalInteraction');
const therapistsInteraction = require('./handlers/TherapistsInteraction');
const DataPorting = require('./handlers/DataPorting');
const SignUp = require('./handlers/SignUp');
const SignIn = require('./handlers/SignIn');
const verifyCode = require('./handlers/verifyCode');
const ProfilePage = require('./handlers/ProfilePage');

// Initial Setup
connectDB();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.set('views', path.join(__dirname, "/views/"));
app.engine("hbs", EHB({
    extname: "hbs",
    defaultLayout: "mainlayout",
    layoutsDir: __dirname + "/views/layouts"
}));
app.set("view engine", "hbs");

// Add Paths
app.use('/user', accountsInteraction);
app.use('/device', devicesInteraction);
app.use('/exercise', exercisesInteraction);
app.use('/journal', journalInteraction);
app.use('/therapist', therapistsInteraction);
app.use('/code', DataPorting);
app.use('/', SignUp);
app.use('/signin', SignIn);
app.use('/verifyCode', verifyCode);
app.use('/profilePage', ProfilePage);

app.listen(Port, ()=>console.log("Server started"));
module.exports = app;