'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subCategoryTwo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      this.hasMany(models.Product, {
        foreignKey: 'catTwoId', 
        as: 'Products', 
        onDelete: 'CASCADE' 
      }),
      
      this.belongsTo(models.subCategoryOne, {
        foreignKey: {
          name: 'catOneId', 
          allowNull: true
        }, 
        onDelete: 'CASCADE', 
        as: 'subCategoryOnes' 
      })

    }
  }
  subCategoryTwo.init({
    catTwoId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },  
    catOneId: {
      allowNull: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    catTwoName: {
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
    modelName: 'subCategoryTwo',
  });
  return subCategoryTwo;
};