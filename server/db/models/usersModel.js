const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      Users.hasMany(models.Orders, {
        foreignKey: 'user_id',
      }); // users tem muitas orders => (ordersModel)
      // (coluna que ta armazenada dentro da orders)
    }
  }
  Users.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    restaurant: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};