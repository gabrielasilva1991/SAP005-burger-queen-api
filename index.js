/* eslint-disable no-console */

require('dotenv').config();

const express = require('express');
const routesApi = require('./server/routes/index');

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use('/', routesApi);

app.get('*', (req, res) => {
  res.send('Hello World!'); // send envia a resposta p o http para que seja exibida no navegador
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
