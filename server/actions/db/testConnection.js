const mongoose = require('mongoose');

module.exports = {
  testConnection() {
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error: '));
    db.once('open', function () {
      console.log('Connected successfully');
    });
  },
};
