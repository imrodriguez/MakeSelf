// set up ======================================================================
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var server = require('http').Server(app);
var io = require('socket.io')(server);

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
require('./config/passport')(passport);
require('./app/routes.js')(app, passport);
io.on('connection', function (socket) {
    socket.on('save', function (obj) {
        console.log(obj);
    });
});

// launch ======================================================================
//app.listen(port);
server.listen(port, function () {
    console.log('Servidor corriendo en el puerto: 8080');
});
console.log('Servidor corriendo en el puerto: ' + port);