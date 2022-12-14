"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    static associate(models) {
      this.belongsTo(models.Profile, {
        foreignKey: {
          name: "profileId",
          allowNull: true,
        },
        onDelete: "CASCADE",
        as: "Profile",
      });
    }
  }
  Address.init(
    {
      addressId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      profileId: {
        allowNull: true,
        type: DataTypes.UUID,
      },
      country: {
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
      },
      street: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Address",
      tableName: "Addresses",
    }
  );
  return Address;
};
