require('dotenv').config();
const express = require('express');

const app = express();

require('@babel/register');

const morgan = require('morgan');
const path = require('path');
// require session
const session = require('express-session');
const FileStore = require('session-file-store')(session);
// session config
const sessionConfig = {
  name: 'englishFlashCards',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? 'Секретное слово',
  resave: false, // * если true, пересохранит сессию, даже если она не менялась
  saveUninitialized: false, // * если false, куки появятся только при установке req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // * время жизни в мс (ms) 99999999
    httpOnly: true,
  },
};
// connect session
app.use(session(sessionConfig));

const mainPage = require('./routes/mainPageRoutes');
//const signUp = require('./routes/mainPageRoutes');
const user = require('./routes/UserRoutes');
const signUp = require('./routes/signUpRoutes');

const render = require('./lib/render');
// middleware check authorization
const isUser = require('./middleware/isUser');

app.use(express.static(path.resolve('public')));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', mainPage);
app.use('/signUp', signUp);
app.use('/user', user);
// Logout
app.get('/logout', isUser, (req, res) => {
  // kill session
  req.session.destroy(() => {
    res.clearCookie('englishFlashCards');
    res.redirect('/');
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) return console.log('Ошибка запуска сервера.', err.message);
  console.log(`Сервер запущен на http://localhost:${PORT} `);
});
