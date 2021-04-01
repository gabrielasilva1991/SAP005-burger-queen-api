/* eslint-disable camelcase */

const db = require('../db/models');

const getProductAll = async (req, res) => {
  await db.Products.findAll()
    .then((products) => {
      if (products.length === 0) {
        res.status(404).json({ message: 'Não existe produtos cadastrados' });
      }
      res.status(200).json(products);
    })
    .catch(() => res.status(400).json({
      message: 'Erro ao processar requisição',
    }));
};

const productCreate = async (req, res) => {
  const {
    name, price, flavor, complement, image, type, sub_type,
  } = req.body;

  await db.Products.create({
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
    .catch(() => res.status(400).json({
      message: 'Erro ao cadastrar produto',
    }));
};

const getProductId = async (req, res) => {
  const productId = await db.Products.findByPk(req.params.id);

  if (!productId) {
    res.status(404).json({ message: 'Produto não encontrado' });
  }

  await db.Products.findAll({
    where: { id: req.params.id },
  })
    .then((product) => {
      res.status(200).json(product);
    })
    .catch(() => res.status(400).json({
      message: 'Erro ao processar requisição',
    }));
};

const updateProductId = async (req, res) => {
  const {
    price, complement, image,
  } = req.body;

  const productId = await db.Products.findByPk(req.params.id);

  if (!productId) {
    res.status(404).json({ message: 'Produto não encontrado' });
  }

  await db.Products.update({
    price,
    complement,
    image,
  }, { where: { id: req.params.id } })

    .then(() => {
      res.status(200).json({
        message: 'Produto atualizado',
      });
    })
    .catch(() => res.status(400).json({
      message: 'Erro ao atualizar produto',
    }));
};

const deleteProductId = async (req, res) => {
  const productId = await db.Products.findByPk(req.params.id);

  if (!productId) {
    res.status(404).json({ message: 'Produto não encontrado' });
  }

  await db.Products.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.status(200).json({
        message: 'Produto excluído',
      });
    })
    .catch(() => res.status(400).json({
      message: 'Erro ao excluir produto',
    }));
};

module.exports = {
  getProductAll,
  getProductId,
  productCreate,
  updateProductId,
  deleteProductId,
};
