const render = require('../lib/render');

const NewList = require('../views/NewList');
const NewWords = require('../views/NewWords');

const { List, Word, Connect } = require('../db/models');

const newListPage = (req, res) => {
  const { user } = req.session;
  render(NewList, { user }, res);
};

const newList = async (req, res) => {
  try {
    const { newList } = req.body;
    const { user } = req.session;
    const newUserList = await List.create({ title: newList });
    await Connect.create({ user_id: user.id, list_id: newUserList.id })
    res.redirect('/user/newWords');
  } catch (err) {
    console.log('errNewListControllers21', err);
  }
};

const newWordsPage = async (req, res) => {
  // const { user } = req.session;
  try {
    const { user } = req.session;
    // const usersWords = await Word.findAll({})
    const usersList = await Connect.findAll({
      where: { user_id: user.id },
      include: List,
      raw: true,
    });
    render(NewWords, { user, usersList }, res);
  } catch (err) {
    console.log('errNewListControllers34', err);
  }
};

const listOfWords = async (req, res) => {
  const { id, title_rus, title_eng } = req.body;
  // console.log('-------req.body----------', req.body);
  // console.log('id, title_rus, title_eng', id, title_rus, title_eng);
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

module.exports = {
  newListPage,
  newList,
  newWordsPage,
  listOfWords,
};
