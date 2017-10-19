/*

create a node module to start you will create a dbconnection.js file to create two methods a method to open the connection and one to retrieve it by setting it to a variable

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