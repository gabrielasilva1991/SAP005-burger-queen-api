const { Router } = require('express')
const userController = require('../controller/usersController')

const usersRouter = Router()

usersRouter.get("/", userController.getUserAll)
usersRouter.post("/", userController.userCreate)
usersRouter.get("/:id", userController.getUserId)
usersRouter.put("/:id", userController.updateUserId)
usersRouter.delete("/:id", userController.deleteUserId)

module.exports = usersRouter
