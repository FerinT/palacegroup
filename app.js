
var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));

// var publicDir = require('path').join(__dirname,'/src');
// var assetDir = require('path').join(__dirname,'/assets');
// app.use(express.static(publicDir));
// app.use(express.static(assetDir));

app.get('/', function(req, res){
    res.sendFile('index.html', { root: __dirname });
})

app.listen(3000, function () {
    console.log('app running on 3000');
})