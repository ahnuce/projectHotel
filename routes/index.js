var express = require('express');
var router = express.Router();
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