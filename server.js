var express = require('express');
var app = require('./cloud/app');

app.use(express.static(__dirname + '/public'));

app.listen(3000);
