const express = require('express');
const routes = express.Router();

//Login page
routes.get('/login', (req, res) => res.send('Login'));

//Register page
routes.get('/register', (req, res) => res.send('Register'));

module.exports = routes;
