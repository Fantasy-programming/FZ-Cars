const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = process.env.PORT || 3000;

// Will store the database credidential
require('dotenv').config();

// Middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(expressLayouts);

// Where the layout are stored
app.set('layout', './layouts/main');

// The view engine
app.set('view engine', 'ejs');

// Setup the routes
const routes = require("./server/routes/fzRoutes.js");
app.use('/', routes);

// Listen to the port
app.listen(port, ()=> console.log(`listening to port ${port}`));
