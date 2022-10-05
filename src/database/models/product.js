"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      this.hasMany(models.ProductComment, {
        foreignKey: "productId",
        as: "ProductComments",
        onDelete: "CASCADE",
      });

      this.belongsToMany(models.Class, {
        foreignKey: "productId",
        through: "Class_Product",
      });
    }
  }
  Product.init(
    {
      productId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      productName: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.DECIMAL(8, 2),
      },
      description: {
        type: DataTypes.TEXT,
      },
      size: {
        type: DataTypes.INTEGER,
      },
      productImage: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      productFile: {
        type: DataTypes.STRING,
      },
      author: {
        type: DataTypes.STRING,
      },
      ISBN: {
        type: DataTypes.BIGINT,
      },
      edition: {
        type: DataTypes.STRING,
      },
      releaseDate: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
