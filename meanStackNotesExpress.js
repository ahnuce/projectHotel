//Express: the web application framework in the MEAN stack
//Listens for incoming requests and will respond it can serve static files can compile html or return json data

/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/

//inside app.js or main js file
var express = require('express');
var app = express();

/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/

//you need to initialize it in order to create an application after you require it by just calling the express function as a variable

//you need it to listen to requests so its just a listen method and pass it a port to know where to listen

app.set('port', 9000);

var server = app.listen(app.get('port'), function(){
    var port = server.address().port;
    console.log("Power level is at port " + port);  
});
console.log('Me first');

/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/

//you then set the app.listen method to a variable to be able to access methods and properties from this callback function 
//the var port = server.address().port allows you to access the port number without using app.get in 
//app.listen is asynchronious

//for routes we need to specify http method like a get or a post we need specify a path and specify the function we want to run when the route is found 

/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/

app.get('/', function(req, res){
    console.log("GET the homepage");
});

//the function in the route usually takes 2 objects, a request (req) and a response (res)

/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/

app.get('/', function(req, res){
    console.log("GET the homepage");
    res.send("This is the response youre going to get from the res.send");
});
//this res.send response.send is what you get when you get a request from the browser

/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/

app.get('/json', function(req, res){
    console.log("GET the JSON");
    res
        .status(200)
        .json( {"jsonData" : true} );
    
});
//simple way to get json data with the .json

/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/

var path = require('path');
//to be able to send a file instead of interpreting it on the server side you can use a native node module called path

/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/

app.get('/file', function(req, res){/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/
    console.log("GET the FILE");
    res
        .status(200)
        .sendFile(path.join(__dirname, 'app.js'));
//use path.join tojoin in a number of different arguments to make a path

/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/

//__dirname standard node variable to find the current directory ... to find our app.js
//===> this will return our app.js file onto the browser instead of our json data

/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/
    
app.use(express.static(path.join(__dirname, 'public')));
//another way to define a route to static files. this adds middleware ==>
//when express receives a request for a route it will checkto see if any matches are made with the files in the folder it will deliver it to the browser without adding any routes. this will setup the public folder with the index.html and so this code here is not necessary

/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/

app.get('/', function(req, res){
    console.log("GET the homepage");
    res
        .status(404)
        .sendFile(path.join(__dirname,'public', 'index.html'));
    
});
    
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/
    
    /* You define a function that will run or process something in the request then it will pass through the middleware and then it will still run and get a response ===> Also ORDER matters with MIDDLEWARE since they run sequentionally */
    
/* Since we are using middleware and need it to continue on to the next one we use the next parameter and run it as a function ===> this will just give us information on what is being requested */
app.use(function(req, res, next){
    console.log(req.method, req.url);
    next();
});

/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/

/* if you want the middleware to run from or after a certain location you can specify the location before the function so this example will start logging things after the css folder */
app.use('/css', function(req, res, next){
    console.log(req.method, req.url);
    next();
});
    
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/

/* The app.js is not that bad right now but when more is added that file will get to be very sizeable so we should seperate our concerns. We are going to start moving our routes to a seperate folder */

/* We need to inialize it as an express app first and set up the router */
var express = require('express');
var router = express.router();

/* Start adding routes to the router object by chaining it with the route  */
/* You define your route then define your method then define your function you want to run ... you can chain different methods to different routes */
router
    .route('/json')
    .get(function(req, res){
        console.log("GET the JSON");
        res
            .status(200)
            .json( {"jsonData" : true} );

    })
    .post(function(req, res){
        console.log("POST the JSON route");
        res
            .status(200)
            .json( {"jsonData" : "POST received"} );

});


module.exports = router;
    
/* To be able to use these routes you have to let app.js know by requiring it and using it */
    var routes = require('./routes');
    app.use('/api', routes);
    
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/
 