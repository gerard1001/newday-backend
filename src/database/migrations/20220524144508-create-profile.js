'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Profiles', {
      profileId: {
        allowNull: false,
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      userId: {
        allowNull: true,
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'Users', 
          key: 'userId'
        }
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { min: 8 },
      },
      role: {
        type: Sequelize.ENUM('admin', 'manager', 'worker', 'client'),
        defaultValue: 'client',
        allowNull: false
      },
      phoneNumber: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      gender: {
          type: Sequelize.ENUM('male', 'female'),
          allowNull: false
      },    
      picture: {
          type: Sequelize.STRING,
          allowNull: false
      },
      age: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Profiles');
  }
};