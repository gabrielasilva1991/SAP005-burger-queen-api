const db = require('../db/models');

const getUserAll = (req, res) => {
  db.Users.findAll({
    attributes: { exclude: ['password'] },
  })
    .then((usersAll) => {
      if (usersAll.length > 0) {
        res.status(200).json(usersAll);
      } else {
        res.status(404).json({ message: 'Usuários não encontrados' });
      }
    })
    // .then((result) => {
    //   res.status(200).json(result);
    // })
    .catch(() => res.status(400).json({
      message: 'erro ao processar requisição',
    }));
};

const userCreate = (req, res) => {
  const {
    name, email, password, restaurant, role,
  } = req.body;
  db.Users.create({
    // where: { email: req.params.email },
    // where: { email },
    // defaults: {
    //   email, name, password, role, restaurant,
    // },
    name,
    email,
    password,
    restaurant,
    role,
  })
    .then((createUser) => {
      // const { email } = req.body;
      if (email === true) {
        res.status(403).json({ message: 'Email já cadastrado' }); // qdo já tem cai no erro ao criar usuário
      } else {
        res.status(201).json(createUser);
      }
    })
    // .then((result) => {
    //   res.status(201).json(result);
    // })
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
      const userId = db.Users.findByPk(req.params.id);
      // const { idUser } = req.params;
      // const userId = db.Users.findByPk({ where: { id: idUser } });
      // const userId = db.Users.findOne({ where: { id: idUser } });
      if (userId) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'Usuário não encontrado' }); // está voltando vazio
      }
    })
    // .then((user) => {
    //   res.status(200).json(user);
    // })
    .catch(() => res.status(400).json({
      message: 'erro ao processar requisição',
    }));
};

const updateUserId = (req, res) => {
  const {
    name, password, role,
  } = req.body;

  // const userUpdate = db.Users.findByPk(req.params.id);
  // if (!userUpdate) {
  //   res.status(404).json({ code: 404, message: 'usuário não localizado' });
  // }

  db.Users.update({
    name,
    password,
    role,
  }, { where: { id: req.params.id } })

    .then(() => {
      const { idUser } = req.params;
      const userUpdate = db.User.findOne({ where: { id: idUser } });
      if (userUpdate) {
        res.status(200).json(userUpdate);
      } else {
        res.status(404).json({ message: 'Usuário não encontrado' }); // está voltando vazio
      }
    })
    // .then(() => {
    //   res.status(200).json({
    //     message: 'usuário atualizado',
    //   });
    // })
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
