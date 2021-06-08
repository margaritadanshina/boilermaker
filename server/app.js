const path = require('path');
const express = require('express');
const morgan = require('morgan');
//const volleyball = require('volleyball')
const app = express();
const bodyParser = require('body-parser');

module.exports = app;

//parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//logging middleware
app.use(morgan('dev'))

app.use('/api', require('./api'))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')))

// you'll of course want static middleware so your browser can request things like your 'bundle.js'
app.use(express.static(path.join(__dirname, '../public')));

// Any routes or other various middlewares should go here!

// Make sure this is right at the end of your server logic!
// The only thing after this might be a piece of middleware to serve up 500 errors for server problems
// (However, if you have middleware to serve up 404s, that go would before this as well)
app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})