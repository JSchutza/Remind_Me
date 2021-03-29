'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Notes', [
      {
        id: 1,
        due_date: new Date(),
        title: "is a title for their note",
        content: "is the content for their note",
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
