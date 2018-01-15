// require statements
var express = require("express");
var http = require("http");
var logger = require("morgan");
var uuid = require("uuid");


// configuration
var app = express();
app.use(logger("short"));


// variables
var portNumber = 8080;


// APIs
app.get("/customer/:id", function (request, response) {
    var id = parseInt(request.params.id, 10);

    console.log(uuid.v1());

    response.json({
        firstName: "Leo",
        lastName: "Tolstoy",
        employeeId: id
    });
});


// server
http.createServer(app).listen(portNumber, function () {
    console.log("Application started on port %s ...", portNumber);
});


