/* eslint-disable camelcase */

const db = require('../db/models');

const getProductOrdersAll = (req, res) => {
  db.Users.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() => res.status(400).json({
      message: 'erro ao processar requisição',
    }));
};

const productOrdersCreate = (req, res) => {
  const {
    order_id, product_id, qtd,
  } = req.body;
  db.Users.create({
    order_id,
    product_id,
    qtd,
  })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch(() => res.status(400).json({
      message: 'erro ao criar pedido',
    }));
};

const getProductOrdersId = (req, res) => {
  db.Users.findAll({
    where: { id: req.params.id },
  })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(() => res.status(400).json({
      message: 'erro ao processar requisição',
    }));
};

const updateProductOrdersId = (req, res) => {
  const {
    order_id, product_id, qtd,
  } = req.body;
  db.Users.update({
    order_id,
    product_id,
    qtd,
  }, { where: { id: req.params.id } })

    .then(() => {
      res.status(200).json({
        message: 'pedido atualizado',
      });
    })
    .catch(() => res.status(400).json({
      message: 'erro ao atualizar pedido',
    }));
};

const deleteProductOrdersId = (req, res) => {
  db.Users.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.status(200).json({
        message: 'pedido excluído',
      });
    })
    .catch(() => res.status(400).json({
      message: 'erro ao excluir pedido',
    }));
};

module.exports = {
  getProductOrdersAll,
  productOrdersCreate,
  getProductOrdersId,
  updateProductOrdersId,
  deleteProductOrdersId,
};
