const express = require('express');

const route = express.Router();

const userMainPage = require('../controllers/UserControllers');
const { 
  newListPage, 
  newList, 
  newWordsPage,
  listOfWords
 } = require('../controllers/newListControllers');

route.get('/', userMainPage);
route.get('/newList', newListPage);
route.post('/newList/new', newList);
route.get('/newWords', newWordsPage);
route.post('/newWords/new', listOfWords);

module.exports = route;
