const render = require('../lib/render');

const UserPage = require('../views/User');

const { Connect, List, Word } = require('../db/models');

const userMainPage = async (req, res) => {
  try {
    const { user } = req.session;
    const userThemes = await Connect.findAll({
      where: { user_id: user.id },
      include: List,
      order: [['id']],
      raw: true,
    });
    // const userStat = await Connect.findAll({ where: })

    // console.log('====userStat====', userStat);
    render(UserPage, { user, userThemes }, res);
  } catch (error) {
    console.log('\x1b[31m', 'Error', error);
  }
};

module.exports = userMainPage;
