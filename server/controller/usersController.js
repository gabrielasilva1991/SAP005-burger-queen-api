const users = [
  {
  "uid": 1,
  "nome": "Gabi",
  "email": "gabi@gabi.com"
  },

  {
  "uid": 2,
  "nome": "Bia",
  "email": "bia@bia.com"
  },

  {
  "uid": 3,
  "nome": "Carol",
  "email": "carol@carol.com"
  },
]

const getUsers = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)")
  res.send(users)
}

const getUserId = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)")
  const uid = Number(req.params.uid)
  const filterUser = users.filter(user => user.uid === uid)
  res.send(filterUser)
}

const userAdd = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)")
  res.send("Request Add User")
}

const updateUserId = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)")
  res.send("Request Update UserId")
}

const deleteUserId = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)")
  res.send("Request Delete UserId")
}

module.exports = { getUsers, getUserId, userAdd, updateUserId, deleteUserId }
  