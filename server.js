// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

// Starts the server to begin listening
// =============================================================



var customers = [{
	name: 'John Smith',
	phone: '4076948323',
	email: 'johnsmith@testfakeemail.com',
	uniqueId: 1
	
}, {
	name: 'Jane Doe',
	phone: '4076786534',
	email: 'janedoe@testfakeemail.com',
	uniqueId: 2
	
}];




app.listen(PORT, function(){
    console.log('App listening on PORT ' + PORT);
});



