'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Notes', [
      {
        id: 1,
        due_date: new Date(),
        title: "note title",
        content: "note content",
        notebook_id: 1,
        createdAt: new Date(),
        updatedAt: new Date
      },

      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Notes', null, {});
  }
};
