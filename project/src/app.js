'use strict';

var express = require('express');
var parser = require('body-parser');
var multer = require('multer');
// var http = require('http').Server(app);
// var http = require('http');
// var server = http.createServer(app);
// var io = require('socket.io')(http);
var router = require('./api');

var app = express();

// require('./database');
// require('./seed');

// app.use(express.bodyParser());
// app.use(express.static(__dirname + '/public'));
app.use('/', express.static('public'));
app.use(parser.json());
// app.use('/', express.static('public'));
// app.use(multer({dest  : './uploads/'}));

app.use('/api', router);

app.listen(3000, function() {
    console.log("The server is running on port 3000!");
});

// server.listen(process.env.PORT, process.env.IP);
// http.listen(8080, function(){
//   console.log('listening on *: ');
  // console.log(process.env.PORT);
// });
