"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate(models) {
      this.hasOne(models.Address, {
        foreignKey: "profileId",
        as: "Address",
        onDelete: "CASCADE",
      }),
        this.belongsTo(models.User, {
          foreignKey: {
            name: "userId",
            allowNull: true,
          },
          onDelete: "CASCADE",
          as: "User",
        });
    }
  }
  Profile.init(
    {
      profileId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      gender: {
        type: DataTypes.ENUM("male", "female"),
        allowNull: false,
      },
      birthDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("full-time", "part-time"),
        allowNull: true,
      },
      maritalStatus: {
        type: DataTypes.ENUM("single", "married", "divorced", "widowed"),
        allowNull: true,
      },
      department: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Profile",
      tableName: "Profiles",
    }
  );
  return Profile;
};
