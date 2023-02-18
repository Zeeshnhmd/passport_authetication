const express = require('express');
const routes = express.Router();

//Login page
routes.get('/login', (req, res) => res.render('login'));

//Register page
routes.get('/register', (req, res) => res.render('register'));

module.exports = routes;
