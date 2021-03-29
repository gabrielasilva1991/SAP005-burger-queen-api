/* eslint-disable camelcase */

const db = require('../db/models');

const getOrderAll = (req, res) => {
  // const { user_id } = req.params;

  // const user = db.Users.findByPk(user_id, {
  //   include: { association: 'users' },
  // });

  db.Orders.findAll()
    .then((result) => {
      // res.status(200).json(user.users);
      res.status(200).json(result);
    })
    .catch(() => res.status(400).json({
      message: 'erro ao processar requisição',
    }));
};

const orderCreate = (req, res) => {
  // const { user_id } = req.params;
  const {
    user_id, client_name, table, status, processedAt,
  } = req.body;

  // const user = db.Users.findByPk(user_id);

  // if (!user) {
  //   return res.status(400).json({ error: 'User not found' });
  // }

  // db.Orders.create({
  //   user_id,
  //   client_name,
  //   table,
  //   status,
  //   processedAt,
  // })
  //   .then((result) => {
  //     res.status(201).json(result);
  //   })
  //   .catch(() => res.status(400).json({
  //     message: 'erro ao salvar ordem',
  //   }));

  const savedOrder = db.Orders.create({
    user_id,
    client_name,
    table,
    status,
    processedAt,
  })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch(() => res.status(400).json({
      message: 'erro ao salvar ordem',
    }));

  req.body.products.map((item) => {
    const product = db.Products.findByPk(item.id);
    if (!product) {
      return res.status(400);
    }

    const prodOrders = {
      orderId: savedOrder.id,
      productId: item.id,
      qtd: item.qtd,
    };

    db.ProductOrders.create(prodOrders)
      .then((result) => {
        res.status(201).json(result);
      })
      .catch(() => res.status(400).json({
        message: 'erro ao salvar produto',
      }));
    return res.status(200).json(savedOrder);
  });
};

const getOrderId = (req, res) => {
  db.Orders.findAll({
    where: { id: req.params.id },
  })
    .then((product) => {
      res.status(200).json(product);
    })
    .catch(() => res.status(400).json({
      message: 'erro ao processar requisição',
    }));
};

const updateOrderId = (req, res) => {
  const {
    status,
  } = req.body;
  db.Orders.update({
    status,
  }, { where: { id: req.params.id } })

    .then(() => {
      res.status(200).json({
        message: 'ordem atualizada',
      });
    })
    .catch(() => res.status(400).json({
      message: 'erro ao atualizar ordem',
    }));
};

const deleteOrderId = (req, res) => {
  db.Orders.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.status(200).json({
        message: 'ordem excluída',
      });
    })
    .catch(() => res.status(400).json({
      message: 'erro ao excluir ordem',
    }));
};

module.exports = {
  getOrderAll,
  getOrderId,
  orderCreate,
  updateOrderId,
  deleteOrderId,
};
