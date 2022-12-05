"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductImage extends Model {
    static associate(models) {
      this.belongsTo(models.Product, {
        foreignKey: {
          name: "productId",
          allowNull: true,
        },
        onDelete: "CASCADE",
        as: "Product",
      });
    }
  }
  ProductImage.init(
    {
      imageId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      productId: {
        allowNull: true,
        type: DataTypes.UUID,
      },
      imageUrl: {
        allowNull: true,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "ProductImage",
    }
  );
  return ProductImage;
};
