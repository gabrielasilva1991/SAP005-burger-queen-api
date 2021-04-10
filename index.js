/* eslint-disable no-console */

require('dotenv').config();

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const routesApi = require('./server/routes/index');

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/', routesApi);

// app.get('*', (req, res) => {
//   res.status(200).send({ message: 'Esta é a API do Burger Queen' });
// });

app.listen(port, () => {
  console.log(`O aplicativo está sendo executado em http://localhost:${port}`);
});
