"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductComment extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: {
          name: "userId",
          allowNull: true,
        },
        onDelete: "CASCADE",
        as: "Users",
      });

      this.belongsTo(models.Product, {
        foreignKey: {
          name: "productId",
          allowNull: true,
        },
        onDelete: "CASCADE",
        as: "Products",
      });
    }
  }
  ProductComment.init(
    {
      pcId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      userId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      productId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      comment: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "ProductComment",
    }
  );
  return ProductComment;
};
