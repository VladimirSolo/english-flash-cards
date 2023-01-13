/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Lists', [
      {
        title: 'еда',
        // user_id: '1',
      },
      {
        title: 'транспорт',
        // user_id: '1',
      },
      {
        title: 'знакомство',
        // user_id: '1',
      },
      {
        title: 'IT',
        // user_id: '1',
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Lists', null, {});
  },
};
