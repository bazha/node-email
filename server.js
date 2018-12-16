'use strict';
const express = require('express');
const app = express();
const router = require('./router');
const port = 3010;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/', router);

app.listen(port, () => {
  console.log(`Server running on ${port} port`)
});