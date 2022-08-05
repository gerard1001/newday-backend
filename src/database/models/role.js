const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {

      this.hasMany(models.User, {
        foreignKey: 'roleId',
        as: 'Users', 
        onDelete: 'SET DEFAULT'
      });
    }
  }
  Role.init(
    {
      roleId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      role: {
        type: DataTypes.ENUM('admin', 'manager', 'worker', 'client'),
        defaultValue: 'client',
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Role',
      tableName: 'Roles',
    },
  );
  return Role;
};
