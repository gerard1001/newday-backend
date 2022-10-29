"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comodity_Company extends Model {
    static associate(models) {}
  }
  Comodity_Company.init(
    {
      comodityCompanyId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      companyId: {
        type: DataTypes.UUID,
      },
      comodityId: {
        type: DataTypes.UUID,
      },
    },
    {
      sequelize,
      modelName: "Comodity_Company",
    }
  );
  return Comodity_Company;
};
