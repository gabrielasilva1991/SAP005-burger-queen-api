const express = require('express')
const routesApi = require('./server/routes')
const app = express()
const port = process.env.PORT || 3000

app.use('/', routesApi);

app.get('*', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
