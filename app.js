const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');


// setup app
const app = express();

// log requests to console
app.use(logger('dev'));

// parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send ({
    message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;
