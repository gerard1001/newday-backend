"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Reply extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: {
          name: "userId",
          allowNull: true,
        },
        onDelete: "CASCADE",
        as: "Users",
      });

      this.belongsTo(models.UserComment, {
        foreignKey: {
          name: "commentId",
          allowNull: true,
        },
        onDelete: "CASCADE",
        as: "UserComments",
      });
    }
  }
  Reply.init(
    {
      replyId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      commentId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      reply: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Reply",
    }
  );
  return Reply;
};
