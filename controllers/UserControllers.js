const render = require('../lib/render');

const UserPage = require('../views/User');

const { List } = require('../db/models');

const userMainPage = async (req, res) => {
  try {
    // const userName = 'Alex';
    const { user } = req.session;
    const UserThemes = await List.findAll({
      where: { user_id: user.id },
      order: [['id']],
      raw: true,
    });
    render(UserPage, { user, UserThemes }, res);
  } catch (error) {
    console.log('\x1b[31m', 'Error', error);
  }
};

module.exports = userMainPage;
