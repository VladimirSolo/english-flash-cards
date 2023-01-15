const render = require('../lib/render');

const NewList = require('../views/NewList');
const NewWords = require('../views/NewWords');
const MyThemes = require('../views/MyThemes');

const { List, Word, Connect } = require('../db/models');

const newListPage = (req, res) => {
  const { user } = req.session;
  render(NewList, { user }, res);
};

const newList = async (req, res) => {
  try {
    const { title } = req.body;
    const { user } = req.session;
    const newUserList = await List.findOrCreate({
      where: {
        title,
      },
    });
    if (newUserList[1] === true) {
      await Connect.create({ user_id: user.id, list_id: newUserList[0].id });
    }

    res.json({ newUserList });
    
  } catch (err) {
    console.log('errNewListControllers25', err);
  }
};

const newWordsPage = async (req, res) => {
  try {
    const { user } = req.session;
    const usersList = await Connect.findAll({
      where: { user_id: user.id },
      include: List,
      raw: true,
    });
    render(NewWords, { user, usersList }, res);
  } catch (err) {
    console.log('errNewListControllers39', err);
  }
};

const listOfWords = async (req, res) => {
  const { id, title_rus, title_eng } = req.body;
  try {
    const { user } = req.session;
    const newWords = await Word.findOrCreate({
      where: {
        title_rus,
        title_eng,
        list_id: id,
        status: false,
      },
      raw: true,
    });
    res.json({ newWords });
  } catch (err) {
    console.log('errNewListControllers58', err);
  }
};

const listOfThemes = async (req, res) => {
  const { user } = req.session;
  // console.log(user)
  render(MyThemes, { user }, res);
};

module.exports = {
  newListPage,
  newList,
  newWordsPage,
  listOfWords,
  listOfThemes,
};
