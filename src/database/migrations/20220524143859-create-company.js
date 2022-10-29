"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Companies", {
      companyId: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
      },
      userId: {
        type: Sequelize.UUID,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
          model: "Users",
          key: "userId",
          as: "Owner",
        },
      },
      companyName: {
        type: Sequelize.STRING,
      },
      companyLogo: {
        type: Sequelize.STRING,
        defaultValue:
          "https://www.pngkit.com/png/detail/87-873983_huffington-post-logo-tv-logo-png.png",
        allowNull: true,
      },
      description: {
        type: Sequelize.TEXT,
      },
      address: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("Companies");
  },
};
