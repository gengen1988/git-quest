var express = require('express');
var app = require('./cloud/app');

app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.listen(3000);
