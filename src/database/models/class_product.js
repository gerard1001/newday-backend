"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Class_Product extends Model {
    static associate(models) {}
  }
  Class_Product.init(
    {
      categoryClassId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      classId: {
        type: DataTypes.UUID,
      },
      productId: {
        type: DataTypes.UUID,
      },
    },
    {
      sequelize,
      modelName: "Class_Product",
    }
  );
  return Class_Product;
};
