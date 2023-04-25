const express = require("express");
const session = require("express-session");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const expressLayouts = require("express-ejs-layouts");
const bcrypt = require("bcrypt");

const app = express();
const port = process.env.PORT || 3000;

// Will store the database credidential
require('dotenv').config();

// Middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(expressLayouts);

// What is this?
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

// passport.js
require("./server/config/passport")(passport);

app.use(passport.initialize());
app.use(passport.session());
 

// Where the layout are stored
app.set('layout', './layouts/main');

// The view engine
app.set('view engine', 'ejs');

// Setup the routes
const routes = require("./server/routes/fzRoutes.js");
app.use('/', routes);

// Listen to the port
app.listen(port, ()=> console.log(`listening to port ${port}`));
