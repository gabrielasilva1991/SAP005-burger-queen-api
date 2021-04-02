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
    .then((orders) => {
      if (orders.length === 0) {
        res.status(404).json({ message: 'Não existem pedidos' });
      }
      res.status(200).json(orders);
    })
    .catch(() => res.status(400).json({
      message: 'Erro ao processar requisição',
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
    res.status(404).json({ message: 'Usuário não cadastrado' });
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
            message: 'Erro ao buscar produto',
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
      message: 'Erro ao criar pedido',
    }));
};

const getOrderId = async (req, res) => {
  const orderId = await db.Orders.findByPk(req.params.id);

  if (!orderId) {
    res.status(404).json({ message: 'Pedido não encontrado' });
  }

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
    .then((order) => {
      res.status(200).json(order);
    })
    .catch(() => res.status(400).json({
      message: 'Erro ao processar requisição',
    }));
};

const updateOrderId = async (req, res) => {
  const {
    status,
  } = req.body;

  const orderId = await db.Orders.findByPk(req.params.id);

  if (!orderId) {
    res.status(404).json({ message: 'Pedido não encontrado' });
  }

  await db.Orders.update({
    status,
  }, { where: { id: req.params.id } })

    .then(() => {
      res.status(200).json({
        message: 'Pedido atualizado',
      });
    })
    .catch(() => res.status(400).json({
      message: 'Erro ao atualizar pedido',
    }));
};

const deleteOrderId = async (req, res) => {
  const orderId = await db.Orders.findByPk(req.params.id);

  if (!orderId) {
    res.status(404).json({ message: 'Pedido não encontrado' });
  }

  await db.Orders.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.status(200).json({
        message: 'Pedido excluído',
      });
    })
    .catch(() => res.status(400).json({
      message: 'Erro ao excluir pedido',
    }));
};

module.exports = {
  getOrderAll,
  getOrderId,
  orderCreate,
  updateOrderId,
  deleteOrderId,
};
