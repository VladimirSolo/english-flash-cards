const router = require('express').Router();

const render = require('../lib/render');
const ListTheme = require('../views/ListTheme');
const Error = require('../views/Error');
const { List, Connect, Word } = require('../db/models');

const WordsShow = require('../views/WordShow');

router.get('/', async (req, res) => {
  try {
    // information about user: login, password, name
    const { user } = req.session;
    console.log('req.session', user.id);
    // find list of all themes in db
    const themes = await Connect.findAll({
      where: {
        user_id: user.id,
      },
      include: List,
      raw: true,
    });
    // console.log('=======themes=====', themes);
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
    const words = await Connect.findOne({
      where: { list_id: req.params.id },
      raw: true,
    });

    const listOfWord = await Word.findAll({
      where: {
        list_id: words.list_id,
        status: false,
      },
      raw: true,
    });

    // await Connect.findOrCreate({
    //   where: {
    //     list_id: req.params.id,
    //     user_id: user.id,
    //   },
    // });

    render(WordsShow, { listOfWord, user }, res);
  } catch (error) {
    render(Error, {
      message: 'Не удалось получить запись из базы данных.',
      error: {},
    }, res);
  }
});
// DELETE PUT change status in DB
router.put('/:id', async (req, res) => {
  try {
    // find word
    const status = await Word.findOne({ where: { id: req.params.id } });
    // rewrite status
    await status.update({ status: true });
    // save
    await status.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
