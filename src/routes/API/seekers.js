const express = require("express");
const seekersAPIRouter = express.Router();
// const { query_runner, query_error } = require("../../../helpers/mysql_helpers");

seekersAPIRouter.get("/", (req, res) => {});

seekersAPIRouter.post("/", (req, res) => {});

seekersAPIRouter.patch("/:id", (req, res) => {});

seekersAPIRouter.delete("/:id", (req, res) => {});

module.exports = seekersAPIRouter;
