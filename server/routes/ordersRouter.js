const { Router } = require('express');
const ordersController = require('../controller/ordersController');

const ordersRouter = Router();

ordersRouter.get('/', ordersController.getOrderAll);
ordersRouter.get('/:id', ordersController.getOrderId);
ordersRouter.post('/', ordersController.orderCreate);
ordersRouter.put('/:id', ordersController.updateOrderId);
ordersRouter.delete('/:id', ordersController.deleteOrderId);

module.exports = ordersRouter;
