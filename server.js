var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router);
var jsonParser = bodyParser.json();
var path = require('path');

//logger
app.use(morgan('dev'));

//Body Parser Middleware
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/frontend'));
app.use('/api', appRoutes);
//down is for frontend



mongoose.connect('mongodb://localhost:27017/mean1');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected");
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/frontend/src/index.html'));
});

app.listen(port, () => {
  console.log('running the server on port', + port);
});
