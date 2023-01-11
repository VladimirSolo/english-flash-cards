const router = require('express').Router();

const render = require('../lib/render');
const ListTheme = require('../views/ListTheme');
const Error = require('../views/Error');
const { List } = require('../db/models');

const { Word } = require('../db/models');
const WordsShow = require('../views/WordShow');

router.get('/', async (req, res) => {
  try {
    // information about user: login, password, name
    const { user } = req.session;
    // find list of all themes in db
    const themes = await List.findAll({ raw: true });
    // render reactcomponent
    render(ListTheme, { themes, user }, res);
  } catch (error) {
    render(Error, {
      message: 'Не удалось получить запись из базы данных.',
      error: {},
    }, res);
  }
});

router.get('/:id', async (req, res) => {
  try {
  // information about user: login, password, name
    const { user } = req.session;
    // console.log('===========================user', user);
    // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>req.params)', req.params);
    const words = await Word.findAll({ where: { list_id: req.params.id }, raw: true });
    console.log(words, 'word<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
    render(WordsShow, { words, user }, res);
  } catch (error) {
    render(Error, {
      message: 'Не удалось получить запись из базы данных.',
      error: {},
    }, res);
  }
});

module.exports = router;
