'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {

    static associate(models) {

      this.hasMany(models.subCategoryOne, {
        foreignKey: 'categoryId', 
        as: 'subCategoryOnes', 
        onDelete: 'CASCADE' 
      })

      this.hasMany(models.User, {
        foreignKey: 'categoryId', 
        as: 'Users', 
        onDelete: 'SET NULL' 
      })

    }
  }
  Category.init({
    categoryId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    categoryName: {
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
    modelName: 'Category',
  });
  return Category;
};