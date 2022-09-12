"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.belongsToMany(models.Category, {
        foreignKey: "userId",
        through: "User_Category",
      });

      this.belongsTo(models.Role, {
        foreignKey: {
          name: "roleId",
          allowNull: true,
        },
        onDelete: "SET DEFAULT",
        as: "Roles",
      });

      this.hasOne(models.Profile, {
        foreignKey: "userId",
        as: "Profiles",
        onDelete: "CASCADE",
      });

      this.hasMany(models.ProductComment, {
        foreignKey: "userId",
        as: "ProductComments",
        onDelete: "CASCADE",
      });

      this.hasMany(models.UserArticle, {
        foreignKey: "userId",
        as: "UserArticles",
        onDelete: "CASCADE",
      });

      this.hasMany(models.UserComment, {
        foreignKey: "userId",
        as: "UserComments",
        onDelete: "CASCADE",
      });

      this.hasMany(models.Tweet, {
        foreignKey: "userId",
        as: "Tweets",
        onDelete: "CASCADE",
      });
    }
  }
  User.init(
    {
      userId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      //All users are predefined as clients during registration, we protest the route for updating users because it is here that the admin, managers and workers are created. The route for creating/registering a user is not protected for the sake of allowing clients to sign up.
      roleId: {
        allowNull: true,
        type: DataTypes.INTEGER,
        defaultValue: 4, // default role is client
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: 8,
        },
      },
      userVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isSubscribed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
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
      modelName: "User",
      tableName: "Users",
    }
  );
  return User;
};
