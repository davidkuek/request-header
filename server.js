var express = require('express');
var app = express();


 
var router = require('./router.js');
app.use('/system-info',router);

module.exports = app;

var port = process.env.PORT || 8080;
app.listen(port);
console.log('System info! ' + port);

