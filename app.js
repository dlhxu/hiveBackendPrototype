const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');

// Set up the express app

// server setup
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Require our routes into the application.
require('./server/routes')(app);

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));

const PORT = process.env.PORT | 8000

app.listen(PORT, console.log(`Server started on port ${PORT}`));