'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');




module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@gmail.com',
        username: 'demo-user',
        hashedPassword: bcrypt.hashSync('password'),
        avatar: faker.image.imageUrl()
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        avatar: faker.image.imageUrl()
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        avatar: faker.image.imageUrl()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['demo-user', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
