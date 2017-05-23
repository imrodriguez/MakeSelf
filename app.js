// set up ======================================================================
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var http = require('http').Server(app);
//var io = require('socket.io')(http);

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var configDB = require('./config/database.js');

// configuration ===============================================================
mongoose.connect(configDB.url);

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

app.set('view engine', 'ejs');

app.use(session({
    secret: 'iloveshoutitshoutitshoutitshoutit'
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// routes ======================================================================
/*io.on('connection', function(socket){
  console.log('a user connected');
});
io.on('save',function(ele){
    console.log(ele);
});*/
require('./config/passport')(passport);
require('./app/routes.js')(app, passport);

// launch ======================================================================
app.listen(port);

console.log('Servidor corriendo en el puerto: ' + port);