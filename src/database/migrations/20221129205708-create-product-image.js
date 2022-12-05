"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ProductImages", {
      imageId: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
      },
      productId: {
        type: Sequelize.UUID,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
          model: "Products",
          key: "productId",
          as: "Product",
        },
      },
      imageUrl: {
        type: Sequelize.STRING,
        defaultValue:
          "https://www.pngkit.com/png/detail/790-7904074_silhouette-at-getdrawings-com-free-for-personal-online.png",
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
    await queryInterface.dropTable("ProductImages");
  },
};
