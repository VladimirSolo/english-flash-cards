const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

const render = require('../lib/render');

const SignUp = require('../views/SignUp');

const { User } = require('../db/models');

router.get('/signUp', (req, res) => {
  render(SignUp, {}, res);
});

router.post('/signUp', async (req, res) => {
  const { login, password } = req.body;
  try {
    // hash password
    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({ login, password: hash });
    // creare session
    req.session.userName = newUser.login;
    // save session
    req.session.save(() => {
      res.redirect('/');
    });
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
});

module.exports = router;
