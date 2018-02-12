var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var mongoose = require('mongoose');
var User = require('./app/models/user');
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

//Body Parser Middleware
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//logger
app.use(morgan('dev'));



mongoose.connect('mongodb://localhost:27017/mean1');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("we're connected");
});

app.post('/users', function(req, res) {
  // console.log(req);
  var user = new User();
  user.username = req.body.username;
  user.password = req.body.password;
  user.email = req.body.email;
  user.save();
  res.send('user created');
});

app.listen(port, () => {
  console.log('running the server on port', + port);
});
