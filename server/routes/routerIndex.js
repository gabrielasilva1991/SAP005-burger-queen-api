const { Router } = require('express')
const router = require("./routerRequests")

const routerApi = Router()

// aqui vai todas as rotas
routerApi.use('/users', router);
routerApi.use('/products', router);
routerApi.use('/orders', router);

module.exports = routerApi
