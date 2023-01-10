const render = require('../lib/render');

const UserPage = require('../views/User');

const { User, List } = require('../db/models');

const userMainPage = async (req, res) => {
  try {
    const userName = 'Alex';
    const UserThemes = await List.findAll({ order: [['id']], raw: true });
    render(UserPage, { userName, UserThemes }, res);
  } catch (error) {
    console.log('\x1b[31m', 'Error', error);
  }
};

module.exports = userMainPage;
