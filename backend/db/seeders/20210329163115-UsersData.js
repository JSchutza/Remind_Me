'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: faker.internet.email(),
        username: 'sam-user',
        hashedPassword: bcrypt.hashSync('password'),
        avatar: faker.image.imageUrl()
      },
      {
        email: faker.internet.email(),
        username: 'jessica-user',
        hashedPassword: bcrypt.hashSync('password'),
        avatar: faker.image.imageUrl()
      }
    ], {});
  },



  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
