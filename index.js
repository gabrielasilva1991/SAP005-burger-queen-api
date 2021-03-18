const express = require('express')
const routesApi = require('./server/routes/routerIndex')
const app = express()
const port = 3000
// var router = express.Router([options])

app.use('/', routesApi);

app.get('*', (req, res) => {
  res.send('Hello World!')
})


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.post('/', (req, res) => {
//   res.send('Got a POST request')
// })

// app.put('/users', (req, res) => {
//   res.send('Got a PUT request at /user')
// })

// app.delete('/users', (req, res) => {
//   res.send('Got a DELETE request at /user')
// })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})