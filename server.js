// DEPENDENCIES
// ==============================================================================

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets a dynamic port for Heroku in the event the local port isn't supported
var PORT = process.env.PORT || 8080;

// BodyParser makes it possible for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use('/static', express.static(path.join(__dirname, 'app/public')))


// ROUTER
// ================================================================================

require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);

// LISTENER
// ==============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});