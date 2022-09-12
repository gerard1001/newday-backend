"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserArticle extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: {
          name: "userId",
          allowNull: true,
        },
        onDelete: "CASCADE",
        as: "Users",
      });

      this.hasMany(models.UserComment, {
        foreignKey: "uaId",
        as: "UserComments",
        onDelete: "CASCADE",
      });
    }
  }
  UserArticle.init(
    {
      uaId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      userId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      image: {
        type: DataTypes.STRING,
      },
      title: {
        type: DataTypes.STRING,
      },
      article: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "UserArticle",
    }
  );
  return UserArticle;
};
