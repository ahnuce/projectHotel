var express = require('express');
var router = express.Router();

/* 

to link the hotels.controller to the route 

*/
var ctrlHotels = require('../controllers/hotels.controllers.js');

/*

Start adding routes to the router object by chaining it with the route  */
/* You define your route then define your method then define your function you want to run ... you can chain different methods to different routes 

*/
router
    .route('/hotels')
    .get(ctrlHotels.hotelsGetAll);

router
    .route('/hotels/:hotelId')
    .get(ctrlHotels.hotelsGetOne);

router
    .route('/hotels/new')
    .post(ctrlHotels.hotelsAddOne);

module.exports = router;