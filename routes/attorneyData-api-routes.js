var db = require ("../models");
module.exports = function (app){
    app.get("/api/attorneyData", function(req, res){
        db.attorneyData.findAll({}).then(function(dbAttorneyData){
            res.json(dbAttorneyData)
        })
    })
    app.post("/api/AttorneyData", function(req, res){
        db.attorneyData.create(req.body).then(function(dbAttorneyData){
            res.json(dbAttorneyData)
        })
    })
}