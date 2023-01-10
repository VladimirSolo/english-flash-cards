const express = require('express');

const route = express.Router();

const render = require('../lib/render');
const Main = require('../views/Main');
const SignUp = require('../views/SignUp');

route.get('/', (req, res) => {
  render(Main, { }, res);
});

route.get('/signUp', (req, res) => {
  render(SignUp, {}, res);
});

module.exports = route;
