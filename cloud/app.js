// 在 Cloud code 里初始化 Express 框架
var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');
var request = require('request');
var url = require('url');

var app = module.exports = express();

app.use(bodyParser.json());       // 读取请求 body 的中间件

var GITHUB_ACCESS_TOKEN = 'https://github.com/login/oauth/access_token';
var CLIENT_ID = 'ca8083d25c32c4b80594';
var CLIENT_SECRET = '190e094301014991f09a97048e7178fa3ef73247';
var CALLBACK = '/';

app.use('/callback', function (req, res) {

  var params = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code: req.query.code
  };

  request.post(GITHUB_ACCESS_TOKEN, {
    json: params
  }, afterAcquireToken);

  function afterAcquireToken(err, resp, body) {
    if (err) return res.status(500).send(err);
    _.each(body, writeCookie);
    res.redirect(CALLBACK);
  }

  function writeCookie(value, key) {
    res.cookie(key, value);
  }

});
