//Express: the web application framework in the MEAN stack
//Listens for incoming requests and will respond it can serve static files can compile html or return json data

//inside app.js or main js file
var express = require('express');
var app = express();

//you need to initialize it in order to create an application after you require it by just calling the express function as a variable

//you need it to listen to requests so its just a listen method and pass it a port to know where to listen

app.set('port', 9000);

var server = app.listen(app.get('port'), function(){
    var port = server.address().port;
    console.log("Power level is at port " + port);  
});
console.log('Me first');

//you then set the app.listen method to a variable to be able to access methods and properties from this callback function 
//the var port = server.address().port allows you to access the port number without using app.get in 