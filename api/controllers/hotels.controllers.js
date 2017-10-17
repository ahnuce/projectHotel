module.exports.hotelsGetAll = function(res, res){
     console.log("GET the JSON");
        res
            .status(200)
            .json( {"jsonData" : true} );
};