var express = require('express');
var app = express();
var path = require('path');
var routes = require('./api/routes');
var bodyParser = require('body-parser');

/* Set the port up for the app to run */
app.set('port', 9000);

/* 
Since we are using middleware and need it to continue on to the next one we use the next parameter and run it as a function as next() 
*/
app.use(function(req, res, next){
    console.log(req.method, req.url);
    next();
});


/* 

Updated way to get the homepage index.html file by using app.use and using static resources 

*/
app.use(express.static(path.join(__dirname, 'public')));

/*
want this middleware to run before any of the api routes and after any of the static files are run the method urlencoded because we are dealing with posting html forms couldve used raw or json
==> must specify a particular option called extended and its a javascript object with either true or false to prevent a warning in console 
false means we only need strings or arrays for data types and true adds more but we dont need that right now

*/
app.use(bodyParser.urlencoded({ extended : false }));

app.use('/api', routes);

/* Original way to GET homepage by doing a request and response with app.get and .sendFile 
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

*/

var server = app.listen(app.get('port'), function(){
    var port = server.address().port;
    console.log("Power level is at port " + port);  
});


