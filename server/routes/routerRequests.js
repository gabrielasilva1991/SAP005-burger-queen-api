const { Router } = require('express')
const controller = require('../controller/databaseController')

const requestResponse = Router()
// aqui vai as requisições
requestResponse.get("/", controller.getAll)

requestResponse.get("/users", controller.getAll)
requestResponse.get("/users/:uid", controller.getAll)
requestResponse.post("/users", controller.postAdd)
requestResponse.put("/users/:uid", controller.getAll)
requestResponse.delete("/users/:uid", controller.getAll)

requestResponse.get("/products", controller.getAll)
requestResponse.get("/products/:productid", controller.getAll)
requestResponse.post("/products", controller.postAdd)
requestResponse.put("/products/:productid", controller.getAll)
requestResponse.delete("/products/:productid", controller.getAll)

requestResponse.get("/orders", controller.getAll)
requestResponse.get("/orders/:orderId", controller.getAll)
requestResponse.post("/orders", controller.postAdd)
requestResponse.put("/orders/:orderId", controller.getAll)
requestResponse.delete("/orders/:orderId", controller.getAll)

module.exports = requestResponse
