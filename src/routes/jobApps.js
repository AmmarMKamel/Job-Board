const express = require("express");
const JobAppsRoute = express.Router();
const JobApplication = require("../models/JobApplication");

// Apply for a job
JobAppsRoute.post("/add/:seekerID/:jobID", async (req, res) => {
  const { seekerID, jobID } = req.params;
  JobApplication.create({
    job_id: jobID,
    applicant_id: seekerID,
  })
    .then(() => res.status(200).redirect(`/seeker/${seekerID}`))
    .catch((err) => res.status(500).json(err.message));
});

// Delete a job application
JobAppsRoute.post("/delete/:seekerID/:jobID", async (req, res) => {
  const { seekerID, jobID } = req.params;
  JobApplication.destroy({
    where: {
      job_id: jobID,
      applicant_id: seekerID,
    },
  })
    .then(() => res.status(200).redirect(`/seeker/${seekerID}`))
    .catch((err) => res.status(500).json(err.message));
});

module.exports = JobAppsRoute;
