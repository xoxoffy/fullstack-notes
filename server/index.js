const express = require('express');
const { port } = require('./config');
const app = express();

// routes
const apiRouter = require('./routes/api');

app.use('/', apiRouter);

app.listen(port, () => {
  console.log('Server running on port 3000');
});
