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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'O campo do nome não pode estar vazio' },
        notNull: { msg: 'Insira um nome' },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: { msg: 'Insira um endereço de e-mail válido' },
        notEmpty: { msg: 'O campo do e-mail não pode estar vazio' },
        notNull: { msg: 'Insira um e-mail' },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'O campo da senha não pode estar vazio' },
        notNull: { msg: 'Insira uma senha' },
        len: { args: [6, 20], msg: 'A senha deve ter de 6 a 20 caracteres' },
      },
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'O campo da função não pode estar vazio' },
        notNull: { msg: 'Insira a função' },
      },
    },
    restaurant: {
      type: DataTypes.STRING,
      defaultValue: 'Lab Burger',
    },
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};
