// 'use strict';
import bcrypt from "bcryptjs";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Profiles",
      [
        {
          profileId: "fa1a5ff5-6853-4165-a7fc-1fe39a26691a",
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
          profileId: "1df916ed-8de3-4fa1-adde-b5a5b1246a78",
          userId: "4e3320b7-8d51-41ec-b946-b18ae2ec1fe7",
          picture:
            "https://s.pngkit.com/png/small/806-8066032_person-icon-black-female-user-icon-png.png",
          gender: "female",
          birthDate: "2010-01-11",
          phoneNumber: 788273111,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: "6a9b7d6f-55c4-49f7-b6a7-632f3925deb9",
          userId: "1d6ca114-9a21-49ef-8e04-e733b357153c",
          picture:
            "https://s.pngkit.com/png/small/225-2257356_this-could-be-you-user-male.png",
          gender: "male",
          birthDate: "1999-11-24",
          phoneNumber: 789944560,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          profileId: "da672281-23d2-40af-97f9-a0d20609636a",
          userId: "49710ec2-a533-42ba-b190-247fd023e98c",
          picture:
            "https://s.pngkit.com/png/small/806-8066032_person-icon-black-female-user-icon-png.png",
          gender: "female",
          birthDate: "1999-11-24",
          phoneNumber: 788147067,
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
