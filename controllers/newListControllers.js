const render = require('../lib/render');

const NewList = require('../views/NewList');
const NewWords = require('../views/NewWords');

const { List, Word } = require('../db/models');

const newListPage = (req, res) => {
  const { user } = req.session;
  render(NewList, { user }, res);
};

const newList = async (req, res) => {
  try {
    const { newList } = req.body;
    const { user } = req.session;
    const newUserList = await List.create({ title: newList, user_id: user.id });
    res.redirect('/user/newWords');
  } catch (error) {
    console.log('errNewListControllers21', err);
  }
};

const newWordsPage = async (req, res) => {
  // const { user } = req.session;
  try {
    const { user } = req.session;
    const usersList = await List.findAll({
      where: { user_id: user.id },
      raw: true,
    });
    console.log('usersList=========>', usersList);
    render(NewWords, { user, usersList }, res);
  } catch (error) {
    console.log('errNewListControllers34', err);
  }
};

const listOfWords = async (req, res) => {
  try {
    const { user } = req.session;
    console.log('req.body=========>', req.body);
    const { title_rus, title_eng, list } = req.body;
    const newWords = await Word.create({
      title_rus,
      title_eng,
      list_id: list,
      status: false,
    });
    console.log('newWords=========>', newWords);
    res.redirect('/user')
  } catch (err) {
    console.log('errNewListControllers34', err);
  }
};

module.exports = {
  newListPage,
  newList,
  newWordsPage,
  listOfWords,
};
