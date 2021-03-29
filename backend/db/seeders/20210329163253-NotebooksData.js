'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Notebooks', [
      {
        id: 1,
        name: `is a testing note book name`,
        description: `is a testing notebook description`,
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
