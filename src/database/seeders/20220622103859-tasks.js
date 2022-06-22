'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tasks', [{
      name: 'Task 1',
      description: 'Task 1 description',
      status: 'finished'
    }, 
    {
      name: 'Task 2',
      description: 'Task 2 description',
      status: 'pending'
    },
    {
      name: 'Task 3',
      description: 'Task 3 description',
      status: 'ongoing'
    },
  ], {}); 
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {});
  }
};
