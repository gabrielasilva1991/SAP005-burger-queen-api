const Users = require("../db/models/usersModels")

const userController = {
 
  getUserAll(req, res, next) {
    Users.findAll()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch(next);
  },

  userCreate(req, res, next) {
    const { userName, email, password, restaurant, role } = req.body;
    Users.create({
      userName,
      email,
      password,
      restaurant,
      role,
    })
      .then((result) => {
        res.status(201).json(result);
      })
      .catch(next);
  },

  getUserId(req, res, next) {
    Users.findAll()
      .then((users) => {
        const id = Number(req.params.id)
        const filterUser = users.filter(user => user.id === id)
        res.status(200).json(filterUser);
      })
      .catch(next);
  },

  updateUserId(req, res, next) {
    const { userName, email, password, restaurant, role } = req.body;
    Users.update({
      userName,
      email,
      password,
      restaurant,
      role,
    }, { where: {id: req.params.id}})

      .then((result) => {
        res.status(200).json(result);
      })
      .catch(next);
  },

  deleteUserId(req, res, next) {
    Users.destroy({ 
      where: { id: req.params.id } //where é usada para filtrar a consulta
    })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch(next);
  },
  
}

module.exports = userController;
  