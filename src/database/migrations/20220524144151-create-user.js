"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      'CREATE EXTENSION IF NOT EXISTS "uuid-ossp";'
    );
    await queryInterface.createTable("Users", {
      userId: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.literal("uuid_generate_v4()"),
        allowNull: false,
      },
      roleId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        defaultValue: 4,
        onDelete: "SET DEFAULT",
        onUpdate: "CASCADE",
        references: {
          model: "Roles",
          key: "roleId",
        },
      },
      categoryId: {
        allowNull: true,
        type: Sequelize.UUID,
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
        references: {
          model: "Categories",
          key: "categoryId",
        },
      },
      firstName: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          min: 8,
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
