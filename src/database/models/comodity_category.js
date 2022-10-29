"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comodity_Category extends Model {
    static associate(models) {}
  }
  Comodity_Category.init(
    {
      comodityCategoryId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      categoryId: {
        type: DataTypes.UUID,
      },
      comodityId: {
        type: DataTypes.UUID,
      },
    },
    {
      sequelize,
      modelName: "Comodity_Category",
    }
  );
  return Comodity_Category;
};
