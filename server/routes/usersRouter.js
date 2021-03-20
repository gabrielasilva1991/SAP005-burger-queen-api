const { Router } = require('express')
const userController = require('../controller/usersController')

const usersRouter = Router()

usersRouter.get("/", userController.all)
usersRouter.post("/", userController.create)

// usersRouter.get("/", usersController.getUsers)
// usersRouter.get("/:uid", usersController.getUserId)
// usersRouter.post("/", usersController.userAdd)
// usersRouter.put("/:uid", usersController.updateUserId)
// usersRouter.delete("/:uid", usersController.deleteUserId)

module.exports = usersRouter
