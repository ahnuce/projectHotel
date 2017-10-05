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
//app.listen is asynchronious

//for routes we need to specify http method like a get or a post we need specify a path and specify the function we want to run when the route is found 



app.get('/', function(req, res){
    console.log("GET the homepage");
});

//the function in the route usually takes 2 objects, a request (req) and a response (res)



app.get('/', function(req, res){
    console.log("GET the homepage");
    res.send("This is the response youre going to get from the res.send");
});
//this res.send response.send is what you get when you get a request from the browser



app.get('/json', function(req, res){
    console.log("GET the JSON");
    res
        .status(200)
        .json( {"jsonData" : true} );
    
});
//simple way to get json data with the .json



var path = require('path');
//to be able to send a file instead of interpreting it on the server side you can use a native node module called path



app.get('/file', function(req, res){
    console.log("GET the FILE");
    res
        .status(200)
        .sendFile(path.join(__dirname, 'app.js'));
//use path.join tojoin in a number of different arguments to make a path
//__dirname standard node variable to find the current directory ... to find our app.js
//===> this will return our app.js file onto the browser instead of our json data