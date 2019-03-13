var express = require('express');
var app = express();
var router = express.Router();
var port = 3000;

//app.set('view engine', 'html');

router.get('/',function(req,res){
    res.sendFile((__dirname+'/index.html'));
  });

router.get('/addgame',function(req,res){
    res.sendFile((__dirname+'/addgame.html'));
  });

router.get('/login',function(req,res){
    res.sendFile((__dirname+'/login.html'));
  });

app.post('/addgame', function(req,res){
    res.sendFile((__dirname+'/index.html'));
});
app.post('/login', function(req,res){
    res.sendFile((__dirname+'/index.html'));
});

router.get(express.static(__dirname + '/pages'));
app.use('/', router);

app.listen(port, function(){
    console.log("server is running on port: " + port);
});