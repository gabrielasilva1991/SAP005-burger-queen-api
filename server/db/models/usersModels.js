const { DataTypes } = require("sequelize");

const sequelize = require("../config/sequelize");

const Users = sequelize.define("users", {
  userName: {
    type: DataTypes.STRING,
    allowNull: false, //coluna que tiver allowNull: false será definida com uma NOT NULL restrição SQL
    unique: true, //nome de usuário só pode ser usado uma vez
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
