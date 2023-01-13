const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const testUser = {
      name: 'test',
      login: 'Solo Solovey',
      password: await bcrypt.hash('qwerty', 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const testUser2 = {
      name: 'vova',
      login: 'vovan',
      password: await bcrypt.hash('123', 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    // console.log(testUser);
    await queryInterface.bulkInsert('Users', [
      testUser,
      testUser2,
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users');
  },
};
