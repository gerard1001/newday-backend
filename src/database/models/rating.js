"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    static associate(models) {}
  }
  Rating.init(
    {
      ratingId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      rating: DataTypes.DECIMAL(2, 1),
    },
    {
      sequelize,
      modelName: "Rating",
    }
  );
  return Rating;
};
