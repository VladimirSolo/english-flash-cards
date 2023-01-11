/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Words', [
      {
        title_rus: 'еда',
        title_eng: 'meal',
        status: false,
        list_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title_rus: 'мороженое',
        title_eng: 'icecream',
        status: false,
        list_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title_rus: 'чай',
        title_eng: 'tea',
        status: false,
        list_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title_rus: 'молоко',
        title_eng: 'milk',
        status: false,
        list_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title_rus: 'хлеб',
        title_eng: 'bread',
        status: false,
        list_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title_rus: 'сыр',
        title_eng: 'cheese',
        status: false,
        list_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title_rus: 'масло',
        title_eng: 'butter',
        status: false,
        list_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title_rus: 'конфета',
        title_eng: 'candy',
        status: false,
        list_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title_rus: 'лимон',
        title_eng: 'lemon',
        status: false,
        list_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title_rus: 'помидор',
        title_eng: 'tomato',
        status: false,
        list_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title_rus: 'кофе',
        title_eng: 'coffee',
        status: false,
        list_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title_rus: 'шоколад',
        title_eng: 'chocolate',
        status: false,
        list_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Words', null, {});
  },
};
