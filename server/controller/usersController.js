const db = require('../db/models');

const getUserAll = (req, res) => {
  db.Users.findAll({
    attributes: { exclude: ['password'] },
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() => res.status(400).json({
      message: 'erro ao processar requisição',
    }));
};

const userCreate = (req, res) => {
  const {
    name, email, password, restaurant, role,
  } = req.body;
  db.Users.create({
    name,
    email,
    password,
    restaurant,
    role,
  })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch(() => res.status(400).json({
      message: 'erro ao criar usuário',
    }));
};

const getUserId = (req, res) => {
  db.Users.findAll({
    attributes: { exclude: ['password'] },
    where: { id: req.params.id },
  })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(() => res.status(400).json({
      message: 'erro ao processar requisição',
    }));
};

const updateUserId = (req, res) => {
  const {
    name, password, role,
  } = req.body;
  db.Users.update({
    name,
    password,
    role,
  }, { where: { id: req.params.id } })

    .then(() => {
      res.status(200).json({
        message: 'usuário atualizado',
      });
    })
    .catch(() => res.status(400).json({
      message: 'erro ao atualizar usuário',
    }));
};

const deleteUserId = (req, res) => {
  db.Users.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.status(200).json({
        message: 'usuário excluído',
      });
    })
    .catch(() => res.status(400).json({
      message: 'erro ao excluir usuário',
    }));
};

module.exports = {
  getUserAll,
  userCreate,
  getUserId,
  updateUserId,
  deleteUserId,
};
