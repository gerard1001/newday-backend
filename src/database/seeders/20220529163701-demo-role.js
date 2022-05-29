'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Roles', 
      [
        {
          roleId: 1,
          role: 'admin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 2,
          role: 'manager',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 3,
          role: 'worker',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 4,
          role: 'client',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('Roles', null, {});

  }
};
