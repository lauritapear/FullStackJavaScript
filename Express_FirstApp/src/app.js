'use strict';

var express = require('express');
var app = express();

app.get('/', function(request, response){
  response.send('Hey, Laura');
});
app.listen(3000);
