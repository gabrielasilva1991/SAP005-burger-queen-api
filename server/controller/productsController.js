/* eslint-disable camelcase */

const db = require('../db/models');

const getProductAll = (req, res) => {
  db.Products.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch(() => res.json({
      message: 'erro ao processar requisição',
    }));
};

const productCreate = (req, res) => {
  const {
    name, price, flavor, complement, image, type, sub_type,
  } = req.body;
  db.Products.create({
    name,
    price,
    flavor,
    complement,
    image,
    type,
    sub_type,
  })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch(() => res.json({
      message: 'erro ao criar produto',
    }));
};

const getProductId = (req, res) => {
  db.Products.findAll({ where: { id: req.params.id } })
    .then((product) => {
      res.status(200).json(product);
    })
    .catch(() => res.json({
      message: 'erro ao processar requisição',
    }));
};

const updateProductId = (req, res) => {
  const {
    name, price, flavor, complement, image, type, sub_type,
  } = req.body;
  db.Products.update({
    name,
    price,
    flavor,
    complement,
    image,
    type,
    sub_type,
  }, { where: { id: req.params.id } })

    .then(() => {
      res.status(200).json({
        message: 'produto atualizado',
      });
    })
    .catch(() => {
      res.json({
        message: 'erro ao atualizar produto',
      });
    });
};

const deleteProductId = (req, res) => {
  db.Products.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.status(200).json({
        message: 'produto excluído',
      });
    })
    .catch(() => {
      res.json({
        message: 'erro ao excluir produto',
      });
    });
};

module.exports = {
  getProductAll, getProductId, productCreate, updateProductId, deleteProductId,
};
