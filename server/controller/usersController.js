const getUsers = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)")
  res.send("Request Get Users")
}

const getUserId = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)")
  res.send("Request Get UserId")
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
  