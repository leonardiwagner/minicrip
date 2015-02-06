var express = require('express');
var app = express();
var http = require('http').Server(app);
var mongoose = require('mongoose');

var port = process.env.PORT || 5000;
var mongoUrl = process.env.MONGODB_URL || "mongodb://localhost";

mongoose.connect(mongoUrl);

//var router = require('./app/routes/router')(app);
//var socketManager = require('./app/sockets/sockets')(http);

//app.use(express.static(__dirname + "/public"));



http.listen(port, function(){
  console.log('listening on *:' + port);
});