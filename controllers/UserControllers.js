const render = require('../lib/render');

const UserPage = require('../views/User');

const {
  Connect, List, Word,
} = require('../db/models');

const userMainPage = async (req, res) => {
  try {
    const { user } = req.session;

    const UserThemes = await Connect.findAll({
      attributes: ['id', 'user_id', 'list_id'],
      where: { user_id: user.id },
      include: {
        model: List,
        attributes: ['id', 'title'],
        include: {
          model: Word,
          attributes: ['list_id', 'status'],
        },
      },
      order: ['id'],
      raw: true,
    });
    // create epmty object
    const obj = {};
    // add key/values in obj
    for (let i = 0; i < UserThemes.length; i += 1) {
      // console.log(UserThemes[i]['List.title']);
      // console.log(obj)
      // console.log(obj[UserThemes[i]['List.title']])
      if (obj[UserThemes[i]['List.title']]) {
        if (UserThemes[i]['List.Words.status']) {
          obj[UserThemes[i]['List.title']].tr += 1;
        } else {
          obj[UserThemes[i]['List.title']].fl += 1;
        }
        // console.log('if =>>>>>>>>>>>>>>>>>>',i)
        // obj[UserThemes[i]['List.title']] += 1;
      } else {
        // console.log('else =>>>>>>>>',i)
        if (UserThemes[i]['List.Words.status']) {
          obj[UserThemes[i]['List.title']] = { tr: 1, fl: 0 };
        } else {
          obj[UserThemes[i]['List.title']] = { tr: 0, fl: 1 };
        }
        // obj[UserThemes[i]['List.title']] = { tr: 0, fl: 0 };
      }
      // console.log(i)
    }
    // console.log(obj);
    render(UserPage, {
      user, UserThemes, obj,
    }, res);
  } catch (error) {
    console.log('\x1b[31m', 'Error', error);
  }
};

module.exports = userMainPage;
