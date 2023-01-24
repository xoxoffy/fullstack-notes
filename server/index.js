const express = require('express');
require('dotenv').config();
const { port } = require('./config');
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');

const app = express();

// db
require('./db/mongoose');

// parsers
// Content-type: application/json
app.use(bodyParser.json());

// routes
app.use('/api', apiRouter);

app.listen(port, () => {
  console.log('Server running on port 3000');
});
