const express = require("express");
const jobAppsAPIRouter = express.Router();

jobAppsAPIRouter.get("/", (req, res) => {});

jobAppsAPIRouter.post("/", (req, res) => {});

jobAppsAPIRouter.patch("/:id", (req, res) => {});

jobAppsAPIRouter.delete("/:id", (req, res) => {});

module.exports = jobAppsAPIRouter;
