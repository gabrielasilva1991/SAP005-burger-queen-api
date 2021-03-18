const { Router } = require('express')
const ordersController = require('../controller/ordersController')

const ordersRouter = Router()

ordersRouter.get("/", ordersController.getOrders)
ordersRouter.get("/:orderId", ordersController.getOrderId)
ordersRouter.post("/", ordersController.orderAdd)
ordersRouter.put("/:orderId", ordersController.updateOrderId)
ordersRouter.delete("/orders/:orderId", ordersController.deleteOrderId)

module.exports = ordersRouter
