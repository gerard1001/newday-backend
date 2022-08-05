// 'use strict';
import bcrypt from "bcryptjs";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          userId: "202b2bfa-b290-4085-aba2-e66d158569f4",
          firstName: "Manzi",
          lastName: "Valentin",
          email: "val@gmail.com",
          roleId: 1,
          password: await bcrypt.hash("ruta1001", 12),
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          userId: "4e3320b7-8d51-41ec-b946-b18ae2ec1fe7",
          firstName: "Ruta",
          lastName: "Gerard",
          email: "ruta@gmail.com",
          roleId: 1,
          password: await bcrypt.hash("ruta1001", 12),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
