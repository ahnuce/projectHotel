var hotelData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(req, res){
     console.log("GET the hotels");
        res
            .status(200)
            .json( hotelData );
};

module.exports.hotelsGetOne = function(req, res) {
    /* 
    this will find the url parameter and use it inside a local variable to get our piece of data   
    */
    var hotelId = req.params.hotelId;
    var thisHotel = hotelData[hotelId];
     console.log("GET hotelId", hotelId);
        res
            .status(200)
            .json( thisHotel );
};