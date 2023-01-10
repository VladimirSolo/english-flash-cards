require('dotenv').config();
const express = require('express'); 

const app = express();

require('@babel/register');

const morgan = require('morgan'); 
const path = require('path');
const session = require('express-session');

// const dbCheck = require('./db/dbCheck');
// dbCheck();

const mainPage = require('./routes/mainPageRoutes');
const signUp = require('./routes/mainPageRoutes');
const user = require('./routes/UserRoutes');

const render = require('./lib/render');

app.use(express.static(path.resolve('public')));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', mainPage); 
app.use('/signUp', signUp);
app.use('/user', user);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) return console.log('Ошибка запуска сервера.', err.message)
  console.log(`Сервер запущен на http://localhost:${PORT} `);
});
