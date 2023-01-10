'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Words', [
      {
        title_rus: 'еда',
        title_eng: 'meal',
        status: false,
        list_id: 1
      },
      {
        title_rus: 'мороженое',
        title_eng: 'icecream',
        status: false,
        list_id: 1
      },
      {
        title_rus: 'чай',
        title_eng: 'tea',
        status: false,
        list_id: 1
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
