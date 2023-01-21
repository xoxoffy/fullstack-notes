const express = require('express');
const { port } = require('./config');
const apiRouter = require('./routes/api');
const app = express();

// db
require('./db/mongoose');

// routes
app.use('/', apiRouter);

app.listen(port, () => {
  console.log('Server running on port 3000');
});
