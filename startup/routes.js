const express = require('express');
const cors = require('cors')
const users = require('../routes/users');
const auth = require('../routes/auth');
const todo = require('../routes/todo');


module.exports = function(app) {
  app.use(cors());
  app.use(express.json());
  app.use('/api/todo', todo);
  app.use('/api/users', users);
  app.use('/api/auth', auth);
}