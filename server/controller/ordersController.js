/* eslint-disable camelcase */

const db = require('../db/models');

const getOrderAll = (req, res) => {
  db.Orders.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() => res.json({
      message: 'erro ao processar requisição',
    }));
};

const orderCreate = (req, res) => {
  const {
    user_id, client_name, table, status, processedAt,
  } = req.body;
  db.Orders.create({
    user_id,
    client_name,
    table,
    status,
    processedAt,
  })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch(() => res.json({
      message: 'erro ao criar pedido',
    }));
};

const getOrderId = (req, res) => {
  db.Orders.findAll({ where: { id: req.params.id } })
    .then((product) => {
      res.status(200).json(product);
    })
    .catch(() => res.json({
      message: 'erro ao processar requisição',
    }));
};

const updateOrderId = (req, res) => {
  const {
    user_id, client_name, table, status, processedAt,
  } = req.body;
  db.Orders.update({
    user_id,
    client_name,
    table,
    status,
    processedAt,
  }, { where: { id: req.params.id } })

    .then(() => {
      res.status(200).json({
        message: 'pedido atualizado',
      });
    })
    .catch(() => {
      res.json({
        message: 'erro ao atualizar pedido',
      });
    });
};

const deleteOrderId = (req, res) => {
  db.Orders.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.status(200).json({
        message: 'pedido excluído',
      });
    })
    .catch(() => {
      res.json({
        message: 'erro ao excluir pedido',
      });
    });
};

module.exports = {
  getOrderAll, getOrderId, orderCreate, updateOrderId, deleteOrderId,
};
