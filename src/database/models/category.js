"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      // this.hasMany(models.Class, {
      //   foreignKey: "categoryId",
      //   as: "Classes",
      //   onDelete: "CASCADE",
      // });

      this.belongsToMany(models.User, {
        foreignKey: "categoryId",
        through: "User_Category",
      });

      this.belongsToMany(models.Class, {
        foreignKey: "categoryId",
        through: "Category_Class",
      });
    }
  }
  Category.init(
    {
      categoryId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      categoryName: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
