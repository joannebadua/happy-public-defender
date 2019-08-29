var express = require ("express");
var app = express();
var PORT = process.env.PORT || 8080;
var db = require (".models");
app.use(express.urlencoded({ extended : true }));
app.use (express.json());