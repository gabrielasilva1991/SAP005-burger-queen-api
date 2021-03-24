/* eslint-disable no-console */
/* eslint-disable linebreak-style */
const getProducts = (req, res) => {
  console.log('você também pode utilizar o console para visualizar =)');
  res.send('Request Get Products');
};

const getProductId = (req, res) => {
  console.log('você também pode utilizar o console para visualizar =)');
  res.send('Request Get ProductId');
};

const productAdd = (req, res) => {
  console.log('você também pode utilizar o console para visualizar =)');
  res.send('Request Add Product');
};

const updateProductId = (req, res) => {
  console.log('você também pode utilizar o console para visualizar =)');
  res.send('Request Update ProductId');
};

const deleteProductId = (req, res) => {
  console.log('você também pode utilizar o console para visualizar =)');
  res.send('Request Delete ProductId');
};

module.exports = {
  getProducts, getProductId, productAdd, updateProductId, deleteProductId,
};
