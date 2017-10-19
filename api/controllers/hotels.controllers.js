var dbconn = require('../data/dbconnection.js');
/*
we need to require the objectid helper to be able to use the name and value pair in our find one method 
*/
var ObjectId = require('mongodb').ObjectId;
var hotelData = require('../data/hotel-data.json');


/*
Extracting data from query strings in the url
*/
module.exports.hotelsGetAll = function(req, res){
    
    var db = dbconn.get();
    var collection = db.collection('hotels');
    
    var offset = 0;
    var count = 5;
    
     /*
    first check to see if the query property existing on the request object and see if query has offset then it will run set the offset value in our controller + query string values come in as string so we must run that through parseInt to get a number and assign that to offset and now we must do the same for count
    */
    
    if (req.query && req.query.offset){
        offset = parseInt(req.query.offset, 10);
    }
    
    if (req.query && req.query.count){
        count = parseInt(req.query.count, 10);
    }
    collection
        .find()
        .skip(offset)
        .limit(count)
        .toArray(function(err,docs){
         console.log("Found hotels", docs);
        res
            .status(200)
            .json(docs);
    })
   
    

    /*
    
  these will return edited json data
    
    */
//    var returnData;

    
   
    
    /*
    getting the hotel json data and slicing it by returning it with the offset value and the end with the count value
    */
  /*
    returnData = hotelData.slice(offset, offset+count);
    
    res
        .status(200)
        .json( returnData );
 */
};

module.exports.hotelsGetOne = function(req, res) {
    var db = dbconn.get();
    var collection = db.collection('hotels');
    var hotelId = req.params.hotelId;
    console.log("GET the hotelId", hotelId);
    collection
        .findOne({ _id : ObjectId(hotelId) }, function(err,doc){
            res
                .status(200)
                .json(doc);
    });
 

//    original method to grab hotel data by hotelId 
    /* 
    this will find the url parameter and use it inside a local variable to get our piece of data   
    */
//    var hotelId = req.params.hotelId;
    /* 
    since the hotelData is an array you must specify the hotelId as an array object
    */
//    var thisHotel = hotelData[hotelId];
//    console.log("GET hotelId", hotelId);
//    res
//        .status(200)
//        .json(hotelData[hotelId]);

};


module.exports.hotelsAddOne = function(req, res) {
    /*
    original way to post
  console.log("POST new hotel");
      
this is where the body parser middleware will store all of the data it passes out of the form

  console.log(req.body);
  res
    .status(200)
    .json(req.body);
    */
    var db = dbconn.get();
    var collection = db.collection('hotels');
    var newHotel;
    console.log("POST new hotel");

    if (req.body && req.body.name && req.body.stars){
        newHotel = req.body;
        newHotel.stars = parseInt(req.body.stars, 10);
        collection.insertOne(newHotel, function(err, response){
            console.log(response.ops)
            res
                .status(201)
                .json(response.ops);
        });
    } else {
        console.log("Data missing from body");
        res
            .status(400)
            .json({ message : "Required data missing from body"});
    }
    
    }
