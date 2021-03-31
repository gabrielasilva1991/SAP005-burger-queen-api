/* eslint-disable spaced-comment */
/* eslint-disable no-console */
/* eslint-disable camelcase */

const db = require('../db/models');

const getOrderAll = async (req, res) => {
  await db.Orders.findAll({
    include: [{
      model: db.Products,
      as: 'products',
      required: false,
      attributes: [
        'id', 'name', 'type', 'price', 'flavor', 'complement',
      ],
      through: {
        model: db.ProductOrders,
        as: 'productOrders',
        attributes: ['qtd'],
      },
    }],
  })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() => res.status(400).json({
      message: 'erro ao processar requisição',
    }));
};

const orderCreate = async (req, res) => {
  const {
    user_id, client_name, table, status, processedAt,
  } = req.body;

  const userId = await db.Users.findByPk(user_id, {
    include: { association: 'ordersMany' },
  });

  if (!userId) {
    res.status(404).json({ message: 'Usuário não encontrado' });
  }

  await db.Orders.create({
    user_id,
    client_name,
    table,
    status,
    processedAt,
  })
    .then((result) => {
      req.body.products.map((product) => {
        const itemProduct = db.Products.findByPk(product.id);
        if (!itemProduct) {
          return res.status(400).json({
            message: 'erro ao buscar produto',
          });
        }

        const itemOrders = {
          order_id: result.id,
          product_id: product.id,
          qtd: product.qtd,
        };

        db.ProductOrders.create(itemOrders);

        return res.status(200).json(result);
      });
    })
    .catch(() => res.status(400).json({
      message: 'erro ao criar pedido',
    }));
};

const getOrderId = async (req, res) => {
  await db.Orders.findAll({
    where: { id: req.params.id },
    include: [{
      model: db.Products,
      as: 'products',
      required: false,
      attributes: [
        'id', 'name', 'type', 'price', 'flavor', 'complement',
      ],
      through: {
        model: db.ProductOrders,
        as: 'productOrders',
        attributes: ['qtd'],
      },
    }],
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
