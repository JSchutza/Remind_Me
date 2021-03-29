'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tags', [
      {
        id: 1,
        name: 'cool stuff',
        creator_id: 1,
        note_id: 1,
        createdAt: new Date(),
        updatedAt: new Date
      },
      {
        id:2,
        name: "shopping list",
        creator_id: 1,
        note_id: 1,
        createdAt: new Date(),
        updatedAt: new Date
      }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tags', null, {});
  }
};
