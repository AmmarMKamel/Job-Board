const express = require("express");
const employersAPIRouter = express.Router();
// const { query_runner, query_error } = require("../../../helpers/mysql_helpers");

employersAPIRouter.get("/", (req, res) => {
    res.send("This is the employers API.");
});

employersAPIRouter.post("/", (req, res) => {
    res.send("Employer Added Successfully!");
});

employersAPIRouter.patch("/", (req, res) => {
    res.send("Employer info updated successfullly!");
});

employersAPIRouter.delete("/:id", (req, res) => {
    res.send("Successflly Deleted!");
});

module.exports = employersAPIRouter;
