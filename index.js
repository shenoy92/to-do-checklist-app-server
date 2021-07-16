const express = require('express');
require('dotenv').config()

const app= express();

require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();

const port= process.env.PORT || 3200;
const server = app.listen(port, () =>`Listening on port ${port}...`);

module.exports = server;