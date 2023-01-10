/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Lists', [
      {
        title: 'еда',
        user_id: '1',
      },
      {
        title: 'транспорт',
        user_id: '1',
      },
      {
        title: 'знакомство',
        user_id: '1',
      },
      {
        title: 'IT',
        user_id: '1',
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
