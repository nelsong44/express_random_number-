// requires
var express = require('express'); //returns an Express function
var path = require('path');
var random = require('./routes/randomNumberRoute.js'); //require randomNumber route to make accessible

// globals
var app = express(); // create instance of Express object by calling express()
var port = 5000; // establish our port

//creating path to randomNumber route - needs to be declared above the 'catch all' route
app.get('/randomNumberRoute', function(req, res) {
  var randomNumber = random(100, 1000000);
  console.log('This is the random number generated: ' + randomNumber);
  res.send('This is the random number generated: ' + randomNumber);
});

// making our static files accessible to Express - Tell Express to start in 'public'
// '/*' is a wild card for ANY route, this is the catch all bucket
app.get('/*', function(req, res) {
  var file = req.params[0] ||  '/views/index.html';
  res.sendFile(path.join(__dirname, '/public/', file));
});

// Start up server
app.listen(port, function(){
  console.log('listening on port', port);
});
