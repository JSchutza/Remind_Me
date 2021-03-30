'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Notebooks', [
      {
        id: 1,
        name: `notebook name`,
        description: `notebook description`,
        notebook_owner: 1,
        createdAt: new Date(),
        updatedAt: new Date
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Notebooks', null, {});
  }
};
