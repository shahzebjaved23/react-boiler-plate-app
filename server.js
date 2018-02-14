var express = require('express');
var app = express();
app.use(express.static('bin'));
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
app.use(bodyParser.json());
var request = require('request');
var path = require('path');
var session = require('client-sessions');
app.use(bodyParser.urlencoded({extended: false}));
var nodemailer = require('nodemailer');

app.use('/admin',function(req,res){
  res.sendFile('index.html', { root: (__dirname, './bin') });
});

app.listen(3000,()=>{
  console.log("")
  console.log('server started on port 3000');
});

