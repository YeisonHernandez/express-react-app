const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors('localhost'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//built-in middleware for json
app.use(express.json())

/* Implement your routes here */
app.use('/animals', require('./routes/api/animals'))


module.exports = app;
