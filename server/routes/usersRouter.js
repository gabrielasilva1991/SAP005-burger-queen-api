const { Router } = require('express')
const usersController = require('../controller/usersController')

const usersRouter = Router()

usersRouter.get("/", usersController.getUserAll)
usersRouter.post("/", usersController.userCreate)
usersRouter.get("/:id", usersController.getUserId)
usersRouter.put("/:id", usersController.updateUserId)
usersRouter.delete("/:id", usersController.deleteUserId)

module.exports = usersRouter
