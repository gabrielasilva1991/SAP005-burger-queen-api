const db = require("../db/models")

const getUserAll = (req, res, next) => {
  db.Users.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(next);
}

const userCreate = (req, res, next) => {
  const { userName, email, password, restaurant, role } = req.body;
  db.Users.create({
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
}

const getUserId = (req, res, next) => {
  db.Users.findAll({where: { id: req.params.id}})
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(next);
}

const updateUserId = (req, res, next) => {
  const { userName, email, password, restaurant, role } = req.body;
  db.Users.update({
    userName,
    email,
    password,
    restaurant,
    role,
  }, { where: {id: req.params.id}})

    // .then((result) => {
    //   res.status(200).json(result);
    // })
    .then(() => res.status(200).json({
      message: 'usuário foi atualizado'
    }))
    // .catch(next);
    .catch(() => res.json({
      message: 'erro ao atualizar' 
    }))
}

const deleteUserId = (req, res, next) => {
  db.Users.destroy({ 
    where: { id: req.params.id } //where é usada para filtrar a consulta
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(next);
}

module.exports = { getUserAll, userCreate, getUserId, updateUserId, deleteUserId }
