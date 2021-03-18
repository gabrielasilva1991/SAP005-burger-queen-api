// aqui vai o código que acessa o banco de dados

const getAll = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)")
  res.send("Request feita")
}

const postAdd = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)")
  res.send("Request add")
}

module.exports = { getAll, postAdd }