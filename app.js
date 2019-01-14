
var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.get('/', function(req, res){
    res.sendFile('index.html', { root: __dirname });
})

app.get('/test', function(req, res){
    res.sendFile('secondary-navigation.html', { root: __dirname });
})

app.listen(3000, function () {
    console.log('app running on 3000');
})