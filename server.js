//Create dependencies
var express = require ("express");

//Set up Express app
var app = express();
var PORT = process.env.PORT || 8080;

//Require models for syncing - don't forget 
// to create a root file index.js and close with module.exports.db
var db = require (".models");

//Setting up Express app to handle data parsing 
app.use(express.urlencoded({ extended : true }));
app.use (express.json());

//Static directory
app.use(express.static("public"));

//Routes
require("./routes/attorneyData-api-routes")(app)

//Sync sequelize models to start Express App
db.sequelize.sync({}).then(function(){
    app.listen(PORT, function(){
        console.log("Listening at http://" + PORT);
    });
});