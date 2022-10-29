"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comodity extends Model {
    static associate(models) {
      this.belongsToMany(models.Category, {
        foreignKey: "comodityId",
        through: "Comodity_Category",
      });

      this.belongsToMany(models.Company, {
        foreignKey: "comodityId",
        through: "Comodity_Company",
      });
    }
  }
  Comodity.init(
    {
      comodityId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      comodityName: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Comodity",
    }
  );
  return Comodity;
};
