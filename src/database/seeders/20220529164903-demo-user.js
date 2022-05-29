// 'use strict';
import bcrypt from 'bcryptjs';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', 
    [
      {
        firstName: 'Manzi',
        lastName: 'Valentin',
        email: 'val@gmail.com',
        roleId: 1,
        password: await bcrypt.hash('ruta1001', 12),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        firstName: 'Ruta',
        lastName: 'Gerard',
        email: 'ruta@gmail.com',
        roleId: 1,
        password: await bcrypt.hash('ruta1001', 12),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Users', null, {});
     
  }
};
