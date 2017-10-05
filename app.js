var express = require('express');
var app = express();
var path = require('path');

app.set('port', 9000);

app.get('/', function(req, res){
    console.log("GET the homepage");
    res
        .status(404)
        .sendFile(path.join(__dirname,'public', 'index.html'));
    
});

app.get('/json', function(req, res){
    console.log("GET the JSON");
    res
        .status(200)
        .json( {"jsonData" : true} );
    
});

app.get('/file', function(req, res){
    console.log("GET the FILE");
    res
        .status(200)
        .sendFile(path.join(__dirname, 'app.js'));
    
});

var server = app.listen(app.get('port'), function(){
    var port = server.address().port;
    console.log("Power level is at port " + port);  
});
