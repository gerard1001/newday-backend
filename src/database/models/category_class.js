"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category_Class extends Model {
    static associate(models) {}
  }
  Category_Class.init(
    {
      categoryClassId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      categoryId: {
        type: DataTypes.UUID,
      },
      classId: {
        type: DataTypes.UUID,
      },
    },
    {
      sequelize,
      modelName: "Category_Class",
    }
  );
  return Category_Class;
};
