const { DataTypes } = require("sequelize");

const sequelize = require("../../database/sequelize");

const Users = sequelize.define("users", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  restaurant: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },


   
  // type: DataTypes.DATETIME, a data / hora atual será usada para preencher esta coluna 
  // defaultValue: Sequelize.NOW (no momento da inserção)
});

//create table if not exists...
const init = async () => {
  await Users.sync();
  // await Users.drop(); //exclui a tabela user('users')
  // await sequelize.drop(); //exclui todas as tabelas
};

init();

module.exports = Users;
