const Users = require("../db/models/usersModels")

// const users = [
//   {
//   "uid": 1,
//   "nome": "Gabi",
//   "email": "gabi@gabi.com"
//   },

//   {
//   "uid": 2,
//   "nome": "Bia",
//   "email": "bia@bia.com"
//   },

//   {
//   "uid": 3,
//   "nome": "Carol",
//   "email": "carol@carol.com"
//   },
// ]

const userController = {
  // console.log("você também pode utilizar o console para visualizar =)")
  // res.send(users)
  all(req, res, next) {
    Users.findAll()
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  },

  create(req, res, next) {
    console.log(req.body)
    const { username, email, password, restaurant, role } = req.body;

    Users.create({
      username,
      email,
      password,
      restaurant,
      role,
    })
      .then((result) => {
        res.status(201).json(result); //return with ID -> 201 (CREATED)
      })
      .catch(next);
  },
}

// const getUserId = (req, res) => {
//   console.log("você também pode utilizar o console para visualizar =)")
//   const uid = Number(req.params.uid)
//   const filterUser = users.filter(user => user.uid === uid)
//   res.send(filterUser)
// }

// const userAdd = (req, res) => {
//   console.log("você também pode utilizar o console para visualizar =)")
//   res.send("Request Add User")
// }

// const updateUserId = (req, res) => {
//   console.log("você também pode utilizar o console para visualizar =)")
//   res.send("Request Update UserId")
// }

// const deleteUserId = (req, res) => {
//   console.log("você também pode utilizar o console para visualizar =)")
//   res.send("Request Delete UserId")
// }

// module.exports = { getUsers, getUserId, userAdd, updateUserId, deleteUserId }

module.exports = userController;
  