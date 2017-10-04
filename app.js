var express = require('express');
var app = express();

app.set('port', 9000);

app.get('/', function(req, res){
    console.log("GET the homepage");
    res.send("This is the response youre going to get from the res.send");
});

var server = app.listen(app.get('port'), function(){
    var port = server.address().port;
    console.log("Power level is at port " + port);  
});
