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
          userVerified: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          userId: "4e3320b7-8d51-41ec-b946-b18ae2ec1fe7",
          firstName: "Rita",
          lastName: "Orra",
          email: "rita@gmail.com",
          roleId: 2,
          password: await bcrypt.hash("ruta1001", 12),
          userVerified: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          userId: "1d6ca114-9a21-49ef-8e04-e733b357153c",
          firstName: "TY",
          lastName: "Patrick",
          email: "patrick@gmail.com",
          roleId: 3,
          password: await bcrypt.hash("ruta1001", 12),
          userVerified: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          userId: "49710ec2-a533-42ba-b190-247fd023e98c",
          firstName: "Mizero",
          lastName: "Ellen",
          email: "ellen@gmail.com",
          roleId: 4,
          password: await bcrypt.hash("ruta1001", 12),
          userVerified: true,
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
