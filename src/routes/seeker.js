const express = require("express");
const SeekerRoute = express.Router();
const Seeker = require("../models/Seeker");
const Job = require("../models/Job");
const JobApplication = require("../models/JobApplication");

SeekerRoute.get("/:id", async (req, res) => {
  const jobs = await Job.findAll();
  res.status(200).render("seeker", { jobs });
});

// Apply for a job
SeekerRoute.post("/:id/jobs/:jobId/apply", async (req, res) => {
  const seeker = await Seeker.findByPk(req.params.id);
  const job = await Job.findByPk(req.params.jobId);
  const application = await JobApplication.create({
    seekerId: seeker.id,
    jobId: job.id,
  });
  res.status(201).redirect(`/seekers/${seeker.id}`);
});

// Delete a job application
SeekerRoute.delete("/:id/applications/:applicationId", async (req, res) => {
  const application = await Application.findByPk(req.params.applicationId);
  await application.destroy();
  res.status(200).send("Application deleted");
});

// Edit seeker account
SeekerRoute.patch("/:id", async (req, res) => {
  const seeker = await Seeker.findByPk(req.params.id);
  seeker.name = req.body.name;
  seeker.email = req.body.email;
  await seeker.save();
  res.status(200).send("Account Updated");
});

// Delete seeker account
SeekerRoute.delete("/:id", async (req, res) => {
  const seeker = await Seeker.findByPk(req.params.id);
  await seeker.destroy();
  res.status(200).send("Account deleted");
});

module.exports = SeekerRoute;
