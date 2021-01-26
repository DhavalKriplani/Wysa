const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const EHB = require('express-handlebars');
const connectDB = require('./Connection');
const app = express();
const Port = 3000;

// Handler Imports
const accountsInteraction = require('./handlers/AccountsInteraction');
const devicesInteraction = require('./handlers/DevicesInteraction');
const exercisesInteraction = require('./handlers/ExercisesInteraction');
const journalInteraction = require('./handlers/JournalInteraction');
const therapistsInteraction = require('./handlers/TherapistsInteraction');
const DataPorting = require('./handlers/DataPorting');
const SignUp = require('./handlers/SignUp');
const SignIn = require('./handlers/SignIn');
const ProfilePage = require('./handlers/ProfilePage');

// Initial Setup
connectDB();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.set('views', path.join(__dirname, "/Views/"));
app.engine("hbs", EHB({
    extname: "hbs",
    defaultLayout: "mainlayout",
    layoutsDir: __dirname + "/Views/layouts"
}));
app.set("view engine", "hbs");
app.listen(Port, ()=>console.log("Server started"));

// Add Paths
app.use('/user', accountsInteraction);
app.use('/device', devicesInteraction);
app.use('/exercise', exercisesInteraction);
app.use('/journal', journalInteraction);
app.use('/therapist', therapistsInteraction);
app.use('/code', DataPorting);
app.use('/signup', SignUp);
app.use('/signin', SignIn);
app.use('/profilePage', ProfilePage);
