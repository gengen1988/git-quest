// 在 Cloud code 里初始化 Express 框架
var express = require('express');
var bodyParser = require('body-parser');

var app = module.exports = express();

// App 全局配置
// app.set('views','cloud/views');   // 设置模板目录
// app.set('view engine', 'ejs');    // 设置 template 引擎
app.use(bodyParser.json());       // 读取请求 body 的中间件

// 使用 Express 路由 API 服务 /hello 的 HTTP GET 请求
app.get('/hello', function (req, res) {
  res.json({
    message: 'Congrats, you just set up your app!'
  });
});
