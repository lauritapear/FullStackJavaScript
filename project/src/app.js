'use strict';

var express = require('express');
var parser = require('body-parser');
var multer = require('multer');
// var router = require('./api');

var app = express();

// require('./database');
// require('./seed');

app.use('/', express.static('public'));
app.use(parser.json());
// app.use('/', express.static('public'));
app.use(multer({dest: './uploads/'}));

// app.use('/api', router);

app.listen(3000, function() {
    console.log("The server is running on port 3000!");
});
