'use strict';
const faker = require('faker');




const js_snippet = `

Here is some JavaScript code:

~~~js
console.log('It works!')
console.log('It works!')
console.log('It works!')
console.log('It works!')
~~~`;

const markdownSnippet = `

Here is some markdown:

# is a h1
-----
## is a h2`;







module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Notes', [
      {
        id: 1,
        due_date: new Date(),
        title: `${faker.lorem.word()}`,
        content: `${faker.lorem.paragraphs()} ${js_snippet}  ${markdownSnippet}`,
        notebook_id: 1,
        createdAt: new Date(),
        updatedAt: new Date
      },
      {
        id: 2,
        due_date: new Date(),
        title: `${faker.lorem.word()}`,
        content: `${faker.lorem.paragraphs()} ${js_snippet}  ${markdownSnippet}`,
        notebook_id: 2,
        createdAt: new Date(),
        updatedAt: new Date
      },
      {
        id: 3,
        due_date: new Date(),
        title: `${faker.lorem.word()}`,
        content: `${faker.lorem.paragraphs()} ${js_snippet}  ${markdownSnippet}`,
        notebook_id: 3,
        createdAt: new Date(),
        updatedAt: new Date
      },
      {
        id: 4,
        due_date: new Date(),
        title: `${faker.lorem.word()}`,
        content: `${faker.lorem.paragraphs()} ${js_snippet}  ${markdownSnippet}`,
        notebook_id: 4,
        createdAt: new Date(),
        updatedAt: new Date
      },
      {
        id: 5,
        due_date: new Date(),
        title: `${faker.lorem.word()}`,
        content: `${faker.lorem.paragraphs()} ${js_snippet}  ${markdownSnippet}`,
        notebook_id: 5,
        createdAt: new Date(),
        updatedAt: new Date
      },
      {
        id: 6,
        due_date: new Date(),
        title: `${faker.lorem.word()}`,
        content: `${faker.lorem.paragraphs()} ${js_snippet}  ${markdownSnippet}`,
        notebook_id: 6,
        createdAt: new Date(),
        updatedAt: new Date
      },
      {
        id: 7,
        due_date: new Date(),
        title: `${faker.lorem.word()}`,
        content: `${faker.lorem.paragraphs()} ${js_snippet}  ${markdownSnippet}`,
        notebook_id: 7,
        createdAt: new Date(),
        updatedAt: new Date
      },
      {
        id: 8,
        due_date: new Date(),
        title: `${faker.lorem.word()}`,
        content: `${faker.lorem.paragraphs()} ${js_snippet}  ${markdownSnippet}`,
        notebook_id: 8,
        createdAt: new Date(),
        updatedAt: new Date
      },
      {
        id: 9,
        due_date: new Date(),
        title: `${faker.lorem.word()}`,
        content: `${faker.lorem.paragraphs()} ${js_snippet}  ${markdownSnippet}`,
        notebook_id: 9,
        createdAt: new Date(),
        updatedAt: new Date
      },
      {
        id: 10,
        due_date: new Date(),
        title: `${faker.lorem.word()}`,
        content: `${faker.lorem.paragraphs()} ${js_snippet}  ${markdownSnippet}`,
        notebook_id: 10,
        createdAt: new Date(),
        updatedAt: new Date
      },

      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Notes', null, {});
  }
};
