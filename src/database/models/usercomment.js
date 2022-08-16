"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserComment extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: {
          name: "userId",
          allowNull: true,
        },
        onDelete: "CASCADE",
        as: "Users",
      });

      this.belongsTo(models.UserArticle, {
        foreignKey: {
          name: "uaId",
          allowNull: true,
        },
        onDelete: "CASCADE",
        as: "UserArticles",
      });
    }
  }
  UserComment.init(
    {
      commentId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      userId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      uaId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      comment: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "UserComment",
    }
  );
  return UserComment;
};
