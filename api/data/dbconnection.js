/*

connecting a node app to a mongodb database and how to connect the db and create your connection string and use a reusable connection
create a node module to start you will create a dbconnection.js file to create two methods a method to open the connection and one to retrieve it by setting it to a variable 
this first part of requiring('mongodb') is the driver for mongo and that dburl will be different depending on the port and location and folder name

*/
var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://localhost:27017/meanhotel'
var _connection = null;

var open = function(){
    MongoClient.connect(dburl, function(err, db){
        if(err){
            console.log("DB connection failed");
            return
        }
        _connection = db;
        console.log("DB connection open", db)
    });
    // set _connection
};

var get = function(){
    return _connection;
};

module.exports = {
    open : open,
    get : get
};