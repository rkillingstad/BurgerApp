var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgerController.js");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function() {
    // Log when our server has started (on server side)
    console.log("Server listening on: http://localhost:" + PORT);
  });