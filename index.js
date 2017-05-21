var express = require('express');
var expressSession = require('express-session');
var expressValidator = require('express-validator');
var app = express();

app.use(expressSession({
	secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}));


app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000);