"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const seed = [
      {
        name: "Herbal Tea",
        location: "China",
        image: "OIP.jpg",
        admin_id: 1,
        description: "some text herbal",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Black Tea",
        location: "India",
        image: "OIP.jpg",
        admin_id: 1,
        description: "some text black",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lemon Tea",
        location: "Myanmar",
        image: "OIP.jpg",
        description: "some text lemon",
        createdAt: new Date(),
        admin_id: 1,
        updatedAt: new Date(),
      },
      {
        name: "Chai",
        location: "South Asia",
        image: "OIP.jpg",
        description: "some text chai",
        admin_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("Teas", seed);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Teas", null, {});
  },
};
