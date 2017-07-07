var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const keyPublishable = process.env.PUBLISHABLE_KEY;
const keySecret = process.env.SECRET_KEY;
const stripe = require("stripe")(keySecret);

app.set('view engine', 'ejs');


app.use(express.static(__dirname + '/public'));

app.get( '/', function( req, res ) {
    res.render( path.join( __dirname, 'public', 'index.ejs' ));
  });

app.get( '/donate', function( req, res ) {
    res.render( path.join( __dirname, 'public', 'donate.ejs' ));
  });





var server = app.listen(process.env.PORT || 8080, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})