// Bringing in npm dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// Creating the express server
var app = express();

// Setting up the port - server will either listen to the port assigned to it (like when hosted on Heroku),
// OR it will listen to port 3000 (like when running localhost:3000 on an individual computer)
var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Handling data parsing with Express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Override with POST.
app.use(methodOverride('_method'));

// Set Handlebars, default layout, and view engine to look for .handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

// The listener. Starts the server. 
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});