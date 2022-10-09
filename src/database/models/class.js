"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    static associate(models) {
      this.belongsToMany(models.Category, {
        foreignKey: "classId",
        through: "Category_Class",
      });

      this.belongsToMany(models.Product, {
        foreignKey: "classId",
        through: "Class_Product",
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
      className: {
        type: DataTypes.STRING,
      },
      coverImage: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Class",
    }
  );
  return Class;
};
