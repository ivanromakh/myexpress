var express = require('express');
var ejs = require("ejs");
var expressSession = require('express-session');
var expressValidator = require('express-validator');
var app = express();

app.set("views", __dirname + "/views");

app.set('view engine', 'ejs');

app.use(expressSession({
	secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}));


app.get('/', function(req, res){
  res.render('users/login.ejs');
});

app.listen(3000);