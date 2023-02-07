const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

const api = require('./route/api');

app.use(express.json());

app.use(express.static('../public'));
app.use('/api', api);

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`server is listening at port:${port}`);
});
