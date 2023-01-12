const express = require('express');
const bcrypt = require('bcrypt');

const route = express.Router();

const render = require('../lib/render');
const Main = require('../views/Main');
const { User } = require('../db/models');

route.get('/', (req, res) => {
  render(Main, { }, res);
});

route.post('/', async (req, res) => {
  const { login, password } = req.body;
  try {
    // find User by Login
    const user = await User.findOne({ where: { login } });
    if (user) {
      // unhash password and compare
      // ? compare - return true / false
      const passCheck = await bcrypt.compare(password, user.password);
      // check
      if (passCheck) {
        // create and save session and redirect
        // req.session.userName = user.login;
    req.session.user = { id: user.id, name: user.name, login: user.login };

        req.session.save(() => {
          // TODO: if ok redirect '/list'
          res.redirect('/list');
        });
      } else {
        // TODO: redirect '/'
        res.redirect('/');
      }
    } else {
      // redirect on registration form '/signUP'
      res.redirect('/signUP');
    }
  } catch (error) {
    res.send(`ERROR---> ${error}`);
  }
});

module.exports = route;
