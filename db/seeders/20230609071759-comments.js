'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const seed = [
      {
        user_id: 1,
        tea_id: 15,
        text: 'Африканский напиток из стеблей и листьев аспалатуса, низкого колючего кустарника. Это напиток без кофеина, чуть сладковатый и очень травянистый на вкус. ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Comments', seed);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Comments', null, {});
  },
};
