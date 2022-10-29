"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Profiles", {
      profileId: {
        allowNull: false,
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.literal("uuid_generate_v4()"),
      },
      userId: {
        allowNull: true,
        type: Sequelize.UUID,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
          model: "Users",
          key: "userId",
          as: "User",
        },
      },
      picture: {
        type: Sequelize.STRING,
        defaultValue:
          "https://s.pngkit.com/png/small/128-1280585_user-icon-fa-fa-user-circle.png",
        allowNull: true,
      },
      gender: {
        type: Sequelize.ENUM("male", "female"),
        allowNull: false,
      },
      birthDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      phoneNumber: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM("full-time", "part-time"),
        allowNull: true,
        defaultValue: "full-time",
      },
      maritalStatus: {
        type: Sequelize.ENUM("single", "married", "divorced", "widowed"),
        allowNull: true,
        defaultValue: "single",
      },
      department: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "anonymous",
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
    await queryInterface.dropTable("Profiles");
  },
};
