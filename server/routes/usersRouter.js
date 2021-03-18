const { Router } = require('express')
const usersController = require('../controller/usersController')

const usersRouter = Router()

usersRouter.get("/", usersController.getUsers)
usersRouter.get("/:uid", usersController.getUserId)
usersRouter.post("/", usersController.userAdd)
usersRouter.put("/:uid", usersController.updateUserId)
usersRouter.delete("/:uid", usersController.deleteUserId)

module.exports = usersRouter
