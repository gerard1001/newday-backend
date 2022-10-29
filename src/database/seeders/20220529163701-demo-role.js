"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Roles",
      [
        {
          roleId: 1,
          role: "super-admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 2,
          role: "owner",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 3,
          role: "admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 4,
          role: "manager",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 5,
          role: "worker",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          roleId: 6,
          role: "client",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Roles", null, {});
  },
};
