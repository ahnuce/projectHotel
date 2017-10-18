var hotelData = require('../data/hotel-data.json');
/*
Extracting data from query strings in the url
*/
module.exports.hotelsGetAll = function(req, res){
    console.log("GET the hotels");
    console.log(req.query);
    
    /*
    these will return edited json data
    */
    var returnData;
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
    
    /*
    getting the hotel json data and slicing it by returning it with the offset value and the end with the count value
    */
    
    returnData = hotelData.slice(offset, offset+count);
    
    res
        .status(200)
        .json( returnData );
};

module.exports.hotelsGetOne = function(req, res) {
    /* 
    this will find the url parameter and use it inside a local variable to get our piece of data   
    */
    var hotelId = req.params.hotelId;
    /* 
    since the hotelData is an array you must specify the hotelId as an array object
    */
    var thisHotel = hotelData[hotelId];
    console.log("GET hotelId", hotelId);
    res
        .status(200)
        .json(hotelData[hotelId]);
};

module.exports.hotelsAddOne = function(req, res) {
  console.log("POST new hotel");
      /* 
this is where the body parser middleware will store all of the data it passes out of the form
*/
  console.log(req.body);
  res
    .status(200)
    .json(req.body);
};