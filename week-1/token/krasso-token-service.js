// require statements
var express = require("express");
var http = require("http");
var logger = require("morgan");


// configuration
var app = express();
app.use(logger("short"));


// variables
var portNumber = 8080;


// server
http.createServer(app).listen(portNumber, function () {
    console.log("Application started on port %s ...", portNumber);
});


