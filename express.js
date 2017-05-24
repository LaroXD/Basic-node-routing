var express = require('express');
var app = express();
app.listen(8000);
app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
})
app.get('/contact',function(req,res){
  res.sendFile(__dirname+'/contact.html');
})
