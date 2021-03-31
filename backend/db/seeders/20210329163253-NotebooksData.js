'use strict';
const faker = require('faker');




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
      {
        id: 2,
        name: `${faker.lorem.word()}`,
        description: `${faker.lorem.word()}`,
        notebook_owner: 1,
        createdAt: new Date(),
        updatedAt: new Date
      },
      {
        id: 3,
        name: `${faker.lorem.word()}`,
        description: `${faker.lorem.word()}`,
        notebook_owner: 1,
        createdAt: new Date(),
        updatedAt: new Date
      },
      {
        id: 4,
        name: `${faker.lorem.word()}`,
        description: `${faker.lorem.word()}`,
        notebook_owner: 1,
        createdAt: new Date(),
        updatedAt: new Date
      },
      {
        id: 5,
        name: `${faker.lorem.word()}`,
        description: `${faker.lorem.word()}`,
        notebook_owner: 1,
        createdAt: new Date(),
        updatedAt: new Date
      },
      {
        id: 6,
        name: `${faker.lorem.word()}`,
        description: `${faker.lorem.word()}`,
        notebook_owner: 1,
        createdAt: new Date(),
        updatedAt: new Date
      },
      {
        id: 7,
        name: `${faker.lorem.word()}`,
        description: `${faker.lorem.word()}`,
        notebook_owner: 1,
        createdAt: new Date(),
        updatedAt: new Date
      },
      {
        id: 8,
        name: `${faker.lorem.word()}`,
        description: `${faker.lorem.word()}`,
        notebook_owner: 1,
        createdAt: new Date(),
        updatedAt: new Date
      },
      {
        id: 9,
        name: `${faker.lorem.word()}`,
        description: `${faker.lorem.word()}`,
        notebook_owner: 1,
        createdAt: new Date(),
        updatedAt: new Date
      },
      {
        id: 10,
        name: `${faker.lorem.word()}`,
        description: `${faker.lorem.word()}`,
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
