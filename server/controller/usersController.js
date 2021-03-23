// const Users = require("../db/models/usersModels")

const models = require('../db/models/usersModels')

// const userController = {
//   async getUserAll (req, res) {
//     try {
//       const users = await Users.findAll();
//       res.status(200).send(users);

//     } catch(error) {
//       console.log(error);
//     }
//   },
// }


const getUserAll = async (req, res) => {
  try {
    // const usersAll = await models.users.findAll();
    const usersAll = await models.usersModels.findAll({
      raw:true,
      attributes: {
        exclude: ['password']
      }
    });
    
    if(usersAll.length > 0) {
      res.status(200).json(usersAll);
    } else {
      res.json({message:'erro ao realizar a consulta'})
    }

  } catch(error) {
    console.log(error);
  }
}

// const userController = {
 
  // getUserAll(req, res, next) {
  //   Users.findAll()
  //     .then((result) => {
  //       res.status(200).json(result);
  //     })
  //     .catch(next);
  // },

  // userCreate (req, res, next) {
  //   const { userName, email, password, restaurant, role } = req.body;
  //   Users.create({
  //     userName,
  //     email,
  //     password,
  //     restaurant,
  //     role,
  //   })
  //     .then((result) => {
  //       res.status(201).json(result);
  //     })
  //     .catch(next);
  // },

  // getUserId(req, res, next) {
  //   Users.findAll()
  //     .then((users) => {
  //       const id = Number(req.params.id)
  //       const filterUser = users.filter(user => user.id === id)
  //       res.status(200).json(filterUser);
  //     })
  //     .catch(next);
  // },

  // updateUserId(req, res, next) {
  //   const { userName, email, password, restaurant, role } = req.body;
  //   Users.update({
  //     userName,
  //     email,
  //     password,
  //     restaurant,
  //     role,
  //   }, { where: {id: req.params.id}})

  //     // .then((result) => {
  //     //   res.status(200).json(result);
  //     // })
  //     .then(() => res.status(200).json({
  //       message: 'usuário foi atualizado'
  //     }))
  //     // .catch(next);
  //     .catch(() => res.json({
  //       message: 'erro ao atualizar' 
  //     }))
  // },

  // deleteUserId(req, res, next) {
  //   Users.destroy({ 
  //     where: { id: req.params.id } //where é usada para filtrar a consulta
  //   })
  //     .then((result) => {
  //       res.status(200).json(result);
  //     })
  //     .catch(next);
  // }
  
// }

// module.exports = userController;

// module.exports = { getUserAll, userCreate, getUserId, updateUserId, deleteUserId }

module.exports = { getUserAll }