const render = require('../lib/render');

const UserPage = require('../views/User');

const { Connect, List } = require('../db/models');

const userMainPage = async (req, res) => {
  try {
    const { user } = req.session;
    const UserThemes = await Connect.findAll({
      where: { user_id: user.id },
      include: List,
      order: [['id']],
      raw: true,
    });
    render(UserPage, { user, UserThemes }, res);
  } catch (error) {
    console.log('\x1b[31m', 'Error', error);
  }
};

module.exports = userMainPage;
