'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate(models) {
      
        this.hasOne(models.Address, {
            foreignKey: 'userId', 
            as: 'Profiles', 
            onDelete: 'CASCADE' 
          }),

          this.belongsTo(models.User, {
            foreignKey: {
              name: 'userId', 
              allowNull: true
            }, 
            onDelete: 'CASCADE', 
            as: 'Users' 
          })

    }
  }
  Profile.init({
    userId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
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
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { min: 8 },
    },
    role: {
      type: DataTypes.ENUM('admin', 'manager', 'worker', 'client'),
      defaultValue: 'client',
      allowNull: false
    },
    phoneNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    },    
    picture: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Profile',
    tableName: 'Profiles'
  });
  return Profile;
};