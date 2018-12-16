'use strict';
const express = require('express');
const app = express();
const port = 3010;

api.use('/', router);

app.listen(port, () => {
  console.log(`Server running on ${port} port`)
});