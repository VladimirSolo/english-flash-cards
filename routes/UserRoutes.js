const express = require('express');

const route = express.Router();

const userMainPage = require('../controllers/UserControllers');

route.get('/', userMainPage);

module.exports = route;
