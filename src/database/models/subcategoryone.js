'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subCategoryOne extends Model {

    static associate(models) {

      this.hasMany(models.subCategoryTwo, {
        foreignKey: 'catOneId', 
        as: 'subCategoryTwos', 
        onDelete: 'CASCADE' 
      }),

      this.belongsTo(models.Category, {
        foreignKey: {
          name: 'categoryId', 
          allowNull: true
        }, 
        onDelete: 'CASCADE', 
        as: 'Categories' 
      })

    }
  }
  subCategoryOne.init({
    catOneId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },    
    categoryId: {
      allowNull: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    catOneName: {
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'subCategoryOne',
  });
  return subCategoryOne;
};