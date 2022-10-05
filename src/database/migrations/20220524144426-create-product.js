"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Products", {
      productId: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
      },
      productName: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.DECIMAL(8, 2),
      },
      description: {
        type: Sequelize.TEXT,
      },
      size: {
        type: Sequelize.INTEGER,
      },
      productImage: {
        type: Sequelize.STRING,
        defaultValue:
          "https://www.pngkit.com/png/detail/790-7904074_silhouette-at-getdrawings-com-free-for-personal-online.png",
      },
      productFile: {
        type: Sequelize.STRING,
      },
      author: {
        type: Sequelize.STRING,
      },
      ISBN: {
        type: Sequelize.BIGINT,
      },
      edition: {
        type: Sequelize.STRING,
      },
      releaseDate: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("Products");
  },
};
