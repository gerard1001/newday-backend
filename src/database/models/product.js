'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {

    static associate(models) {

      this.belongsTo(models.subCategoryTwo, {
        foreignKey: {
          name: 'catTwoId', 
          allowNull: true
        }, 
        onDelete: 'CASCADE', 
        as: 'subCategoryTwos' 
      })

    }
  }
  Product.init({
    productId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    catTwoId: {
      allowNull: true,
      type: DataTypes.UUID,
    },
    productName: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.INTEGER
    },
    productImage: {
      allowNull: true,
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
    modelName: 'Product',
  });
  return Product;
};