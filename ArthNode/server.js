var http = require("http");
var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.render("index", { title: "Project ArthNode" });
});

var controllers = require("./controllers");
controllers.init(app);

app.set("view engine", "vash"); // vash view engine

// set the public static resource folder
app.use(express.static(__dirname + "/public"));


var server = http.createServer(app);


server.listen(3000);
