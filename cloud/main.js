var app = require('cloud/app.js');

// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
AV.Cloud.define('hello', function(request, response) {
  response.success('Hello world!');
});

// 最后，必须有这行代码来使 express 响应 HTTP 请求
app.listen();
