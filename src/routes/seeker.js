const express = require("express");
const { Op } = require("sequelize");
const SeekerRoute = express.Router();
const Seeker = require("../models/Seeker");
const Job = require("../models/Job");
const JobApplication = require("../models/JobApplication");

SeekerRoute.get("/:id", async (req, res) => {
// <<<<<<< HEAD
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
// =======
  const seeker = await Seeker.findByPk(req.params.id);
  const jobs = await Job.findAll();
  const applications = await JobApplication.findAll({
    where: { applicant_id: seeker.id },
  });
  let appliedJobsArr = [];
  applications.forEach((app) => {
    appliedJobsArr.push(app.job_id);
  });
  const appliedJobs = await Job.findAll({
    where: { id: { [Op.in]: appliedJobsArr } },
  });
  res.status(200).render("seeker", {
    seeker,
    jobs,
    appliedJobs,
  });
});

SeekerRoute.post("/edit/:id", async (req, res) => {
  const seeker = await Seeker.findByPk(req.params.id);
  const { name, email, password, location } = req.body;
  await Seeker.update(
    {
      name,
      email,
      password,
      location,
    },
    { where: { id: seeker.id } }
  );
  res.status(200).redirect(`/seeker/${seeker.id}`);
// >>>>>>> a6e6a8a792f717554e3805348978fe98f7e083be
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
