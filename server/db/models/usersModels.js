const { DataTypes } = require("sequelize");

const sequelize = require("../../database/sequelize");

const UserModel = sequelize.define("user", {
  
  model: DataTypes.STRING,
  brand: DataTypes.STRING,
  hp: DataTypes.INTEGER,
});

//create table if not exists...
const init = async () => {
  await UserModel.sync();
};

init();

module.exports = UserModel;