require("dotenv").config();

const express = require('express')
const routesApi = require('./server/routes/index')
const port = process.env.PORT || 3000

const app = express()

app.use(express.json());
app.use('/', routesApi);

app.get('*', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// app.get('/', (req, res) => {
//   return res.json()
// })

// app.post('/', (req, res) => {
//   const body = req.body

//   if (!body)
//    return res.status(400).end()
//   db.push(body)
//     return res.json(body)
// })

// app.delete('/:uid', (req, res) => {
//   const id = req.params.uid

//   let newDb = db.filter(item => {
//     if(!item[id])
//       return item
//   })

//   db = newDb

//   return res.send(newDb)
// })


// app.use((err, req, res, next) => {
//   if (process.env.NODE_ENV === "production")
//     res.status(500).json({ error: "internal server error" });
//   else return next(err);
// });
