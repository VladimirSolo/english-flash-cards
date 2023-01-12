const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

const render = require('../lib/render');

const SignUp = require('../views/SignUp');

const { User } = require('../db/models');

router.get('/', (req, res) => {
  render(SignUp, {}, res);
});

router.post('/', async (req, res) => {
  const { name, login, password } = req.body;
  try {
    // hash password
    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, login, password: hash });
    // creare session
    // req.session.userName = newUser.login;
    req.session.user = { id: newUser.id, name: newUser.name, login: newUser.login };
console.log('req.session.user------------>', req.session.user);
    // save session
    req.session.save(() => {
      res.redirect('/list');
    });
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
});

module.exports = router;
