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
      companyId: {
        type: Sequelize.UUID,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
          model: "Companies",
          key: "companyId",
          as: "Company",
        },
      },
      productName: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.DECIMAL(8, 2),
      },
      full_price: {
        type: Sequelize.DECIMAL(8, 2),
      },
      description: {
        type: Sequelize.TEXT,
      },
      size: {
        type: Sequelize.STRING,
      },
      images: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      imagesId: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      brand: {
        type: Sequelize.STRING,
      },
      ISBN: {
        type: Sequelize.BIGINT,
      },
      releaseDate: {
        type: Sequelize.DATE,
      },
      countInStock: {
        type: Sequelize.INTEGER,
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
