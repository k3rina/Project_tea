'use strict';
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    const seed = [{
      name: "Admin",
      email: "admin@mail.ru",
      password: await bcrypt.hash("123", 10),
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }];
    await queryInterface.bulkInsert('Users', seed)
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
