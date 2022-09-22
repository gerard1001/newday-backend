"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    static associate(models) {
      // this.hasMany(models.subCategoryTwo, {
      //   foreignKey: 'classId',
      //   as: 'subCategoryTwos',
      //   onDelete: 'CASCADE'
      // }),

      this.hasMany(models.Product, {
        foreignKey: "classId",
        as: "Products",
        onDelete: "CASCADE",
      });

      this.belongsTo(models.Category, {
        foreignKey: {
          name: "categoryId",
          allowNull: true,
        },
        onDelete: "CASCADE",
        as: "Categories",
      });
    }
  }
  Class.init(
    {
      classId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      categoryId: {
        allowNull: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      catOneName: {
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Class",
    }
  );
  return Class;
};
