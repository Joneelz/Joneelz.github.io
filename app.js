var express = require('express');
var bodyParser = require('body-parser');
var router = require('./router.js');
var app = express();

//配置模版引擎
app.engine('html',require('express-art-template'));

//配置post请求模块
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//挂载路由模块
app.use(router);

app.listen(3000,function () {
	console.log('服务器3000端口启动成功，运行中.....')
})

// module.exports = app