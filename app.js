var express = require('express');
var bodyParser = require("body-parser");
var session = require("express-session");
var router_main = require('./routes/routes.main');
var router_dash = require('./routes/routes.dash');
var session_middleware = require('./middlewares/session');
var fileUpload = require('express-fileupload');

var app = express();

app.use(express.static('public'));
app.use(express.static('data'));
app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  secret: "1949892849",
  resave: false,
  saveUninitialized: false
}));

app.set("view engine", "ejs");

app.use("/",router_main);
app.use("/dashboard",session_middleware);
app.use("/dashboard",router_dash);
app.listen(8080);
