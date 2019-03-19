const express = require('express');
const router = require('./routes/routes');

const mongoose = require('mongoose');

//setup express app
const app = express();

mongoose.connect('mongodb://localhost/cricketers');

mongoose.Promise = global.Promise;

app.use(require('body-parser').json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use('/api', router);

//Error handling middleware
app.use(function(err, req, res, next) {
  res.status(422).send(err.message);
});

//listen for request
app.listen(process.env.port || 4000, function() {
  console.log('listening to port 4000');
});
