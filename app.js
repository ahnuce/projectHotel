var express = require('express');
var app = express();

app.set('port', 9000);

var server = app.listen(app.get('port'), function(){
    var port = server.address().port;
    console.log("Power level is at port " + port);  
});
console.log('Me first');