// 'use strict';
import bcrypt from "bcryptjs";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Profiles",
      [
        {
          userId: "202b2bfa-b290-4085-aba2-e66d158569f4",
          picture:
            "https://s.pngkit.com/png/small/225-2257356_this-could-be-you-user-male.png",
          gender: "male",
          birthDate: "1999-11-24",
          phoneNumber: 788180000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: "4e3320b7-8d51-41ec-b946-b18ae2ec1fe7",
          picture:
            "https://s.pngkit.com/png/small/806-8066032_person-icon-black-female-user-icon-png.png",
          gender: "female",
          birthDate: "2010-01-11",
          phoneNumber: 788273111,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Profiles", null, {});
  },
};
