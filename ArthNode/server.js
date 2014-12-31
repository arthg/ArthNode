var http = require("http");
var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.render("index", { title: "Project ArthNode" });
});

app.set("view engine", "vash"); // vash view engine

var server = http.createServer(app);


server.listen(3000);
