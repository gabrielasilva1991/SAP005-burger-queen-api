const { Router } = require('express');
const productsController = require('../controller/productsController');

const productsRouter = Router();

productsRouter.get('/', productsController.getProductAll);
productsRouter.get('/:id', productsController.getProductId);
productsRouter.post('/', productsController.productCreate);
productsRouter.put('/:id', productsController.updateProductId);
productsRouter.delete('/:id', productsController.deleteProductId);

module.exports = productsRouter;
