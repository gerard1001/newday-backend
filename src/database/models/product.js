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

      this.hasMany(models.ProductImage, {
        foreignKey: "productId",
        as: "ProductImages",
        onDelete: "CASCADE",
      });

      this.belongsToMany(models.Class, {
        foreignKey: "productId",
        through: "Class_Product",
      });

      this.belongsTo(models.Company, {
        foreignKey: {
          name: "companyId",
          allowNull: true,
        },
        onDelete: "CASCADE",
        as: "Company",
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
      companyId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      productName: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.DECIMAL(8, 2),
      },
      full_price: {
        type: DataTypes.DECIMAL(8, 2),
      },
      images: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      imagesId: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      description: {
        type: DataTypes.TEXT,
      },
      size: {
        type: DataTypes.STRING,
      },
      brand: {
        type: DataTypes.STRING,
      },
      ISBN: {
        type: DataTypes.BIGINT,
      },
      releaseDate: {
        type: DataTypes.DATE,
      },
      // countInStock: {
      //   type: DataTypes.INTEGER,
      // },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
