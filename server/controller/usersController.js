const db = require('../db/models');

const getUserAll = async (req, res) => {
  await db.Users.findAll({
    attributes: { exclude: ['password'] },
  })
    .then((users) => {
      if (users.length === 0) {
        res.status(404).json({ message: 'Não existe  usuários cadastrados' });
      }
      res.status(200).json(users);
    })
    .catch(() => res.status(400).json({
      message: 'erro ao processar requisição',
    }));
};

const userCreate = async (req, res) => {
  const {
    name, email, password, restaurant, role,
  } = req.body;

  // const [user, created] = await db.Users.findOrCreate({
  await db.Users.findOrCreate({
    where: { email },
    defaults: {
      email, name, password, role, restaurant,
    },
  })
    .then((createUser) => {
      const create = createUser[1];
      if (!create) {
        res.status(404).json({ message: 'Email já cadastrado' });
      }
      res.status(201).json(createUser);
    })
    .catch(() => res.status(400).json({
      message: 'erro ao criar usuário',
    }));
};

const getUserId = async (req, res) => {
  const userId = await db.Users.findByPk(req.params.id);

  if (!userId) {
    res.status(404).json({ message: 'Usuário não encontrado' });
  }

  await db.Users.findAll({
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

const updateUserId = async (req, res) => {
  const {
    name, password, role,
  } = req.body;

  const userId = await db.Users.findByPk(req.params.id);

  if (!userId) {
    res.status(404).json({ message: 'Usuário não encontrado' });
  }

  await db.Users.update({
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

const deleteUserId = async (req, res) => {
  const userId = await db.Users.findByPk(req.params.id);

  if (!userId) {
    res.status(404).json({ message: 'Usuário não encontrado' });
  }

  await db.Users.destroy({ where: { id: req.params.id } })
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
