var express = require('express');
var app = express();
app.use(express.static('public'));
var calendarRouter = require('./config/routes.js');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
    next();
});

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(calendarRouter);

let port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log(`Listening on port ${ port }`);
});