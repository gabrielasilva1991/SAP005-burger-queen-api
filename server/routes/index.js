const { Router } = require('express')
// const router = require("./router")
const usersRouter = require("./usersRouter")
const productsRouter = require("./productsRouter")
const ordersRouter = require("./ordersRouter")

const routerApi = Router()

// routerApi.use('/', router);
routerApi.use('/users', usersRouter);
routerApi.use('/products', productsRouter);
routerApi.use('/orders', ordersRouter);

module.exports = routerApi
