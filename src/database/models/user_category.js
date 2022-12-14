"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_Category extends Model {
    static associate(models) {}
  }
  User_Category.init(
    {
      userCategoryId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      userId: {
        type: DataTypes.UUID,
      },
      categoryId: {
        type: DataTypes.UUID,
      },
    },
    {
      sequelize,
      modelName: "User_Category",
    }
  );
  return User_Category;
};
