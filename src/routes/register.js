const express = require("express");
// Change the name of the route here
const RegisterRoute = express.Router();
// const { query_runner, query_error } = require("../helpers/mysql_helpers");

// Render the view in this GET route
RegisterRoute.get("/", (req, res) => {

});

// Export the route
module.exports = RegisterRoute;