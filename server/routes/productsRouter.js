const { Router } = require('express')
const productsController = require('../controller/productsController')

const productsRouter = Router()

productsRouter.get("/", productsController.getProducts)
productsRouter.get("/:productId", productsController.getProductId)
productsRouter.post("/", productsController.productAdd)
productsRouter.put("/:productId", productsController.updateProductId)
productsRouter.delete("/:productId", productsController.deleteProductId)

module.exports = productsRouter
