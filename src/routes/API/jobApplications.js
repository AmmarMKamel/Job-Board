const express = require("express");
const jobAppsAPIRouter = express.Router();
const JobApps = require("../../models/jobApplications");

jobAppsAPIRouter.get("/", (req, res) => {
  JobApps.findAll()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json(err.message));
});

jobAppsAPIRouter.post("/", (req, res) => {
  JobApps.create({ ...req.body })
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(200).json(err.message));
});

jobAppsAPIRouter.patch("/", (req, res) => {
  JobApps.update({ ...req.body }, { where: { id: req.params.id } })
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json(err.message));
});

jobAppsAPIRouter.delete("/:id", (req, res) => {
  JobApps.destroy({ where: { id: req.params.id } })
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json(err.message));
});

module.exports = jobAppsAPIRouter;
