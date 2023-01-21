const mongoose = require('mongoose');
const { database } = require('../config');
const { testConnection } = require('../actions/db/testConnection');

// db connect
mongoose.connect(database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

testConnection();
