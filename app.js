var express = require('express');
var app = express();
var router = express.Router();
var port = 3000;
var mongoose = require('mongoose');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var passport = require('passport');

app.engine('handlebars',exphbs({
  defaultLayout:'main'
}));
app.set('view engine', 'handlebars');

router.get('/',function(req,res){
    res.render("index");
  });

router.get('/addgame',function(req,res){
  res.render("addgame");
  });

router.get('/login',function(req,res){
  res.render("login");
  });

router.get('/register',function(req,res){
    res.render("register");
    });

app.post('/addgame', function(req,res){
    res.redirect('/');
});
app.post('/login', function(req,res){
    res.redirect('/');
});
app.post('/register', function(req,res){
  res.redirect('/login');
});

app.use(express.static(__dirname + '/views'));
//router.get(express.static(__dirname + '/pages'));
app.use('/', router);

app.listen(port, function(){
    console.log("server is running on port: " + port);
});