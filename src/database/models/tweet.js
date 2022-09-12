"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tweet extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: {
          name: "userId",
          allowNull: true,
        },
        onDelete: "CASCADE",
        as: "Users",
      });
    }
  }
  Tweet.init(
    {
      tweetId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      userId: {
        type: DataTypes.UUID,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
          model: "Users",
          key: "userId",
        },
      },
      title: {
        type: DataTypes.STRING,
      },
      content: {
        type: DataTypes.TEXT,
      },
      image: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Tweet",
    }
  );
  return Tweet;
};
