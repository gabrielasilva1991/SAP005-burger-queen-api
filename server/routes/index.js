const { Router } = require('express');
const usersRouter = require('./usersRouter');
const productsRouter = require('./productsRouter');
const ordersRouter = require('./ordersRouter');

const routerApi = Router();

routerApi.use('/users', usersRouter);
routerApi.use('/products', productsRouter);
routerApi.use('/orders', ordersRouter);

module.exports = routerApi;
