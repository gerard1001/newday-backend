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
        as: "Profile",
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

      this.hasOne(models.Review, {
        foreignKey: "userId",
        as: "Reviews",
        onDelete: "CASCADE",
      });

      this.belongsTo(models.User, {
        foreignKey: {
          name: "userId",
          allowNull: true,
        },
        onDelete: "CASCADE",
        as: "Manager",
      });

      this.hasMany(models.User, {
        foreignKey: "userId",
        onDelete: "CASCADE",
      });

      this.hasMany(models.Company, {
        foreignKey: "userId",
        as: "Companies",
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
      roleId: {
        allowNull: true,
        type: DataTypes.INTEGER,
        defaultValue: 4, // default role is client
      },
      managerId: {
        type: DataTypes.UUID,
        default: null,
        references: {
          model: "Users",
          key: "userId",
          as: "Manager",
        },
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
