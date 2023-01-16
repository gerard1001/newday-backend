"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    static associate(models) {
      this.belongsToMany(models.Comodity, {
        foreignKey: "companyId",
        through: "Comodity_Company",
      });

      this.belongsTo(models.User, {
        foreignKey: {
          name: "userId",
          allowNull: true,
        },
        onDelete: "CASCADE",
        as: "owner",
      });

      this.hasMany(models.Product, {
        foreignKey: "companyId",
        as: "Products",
        onDelete: "CASCADE",
      });
    }
  }
  Company.init(
    {
      companyId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      companyName: {
        type: DataTypes.STRING,
      },
      companyLogo: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
      },
      companyProducts: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Company",
    }
  );
  return Company;
};
