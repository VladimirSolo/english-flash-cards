/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Connects', [
      {
        user_id: 1,
        list_id: 1,
      },
      {
        user_id: 2,
        list_id: 2,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Connects', null, {});
  },
};
