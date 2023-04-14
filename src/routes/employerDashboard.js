const express = require("express");
const Employer = require("../models/Employer");
const Job = require("../models/Job");
const EmployerRoute = express.Router();

EmployerRoute.get("/:id", async (req, res) => {
  const employer = await Employer.findByPk(req.params.id);
  const jobs = await Job.findAll({ where: { employerId: employer.id } });
  res.status(200).render("employer", { employer });
});

// add new job
EmployerRoute.post("/:id/jobs", async (req, res) => {
  const employer = await Employer.findByPk(req.params.id);
  const job = await Job.create({
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    salary: req.body.salary,
    employerId: employer.id,
  });
  res.status(201).redirect(`/employers/${employer.id}`);
});

// edit a job
EmployerRoute.patch("/:id/jobs/:Id", async (req, res) => {
  const job = await Job.findByPk(req.params.jobId);
  job.title = req.body.title;
  job.description = req.body.description;
  job.location = req.body.location;
  job.salary = req.body.salary;
  await job.save();
  res.status(200).send("Job Updated");
});

// delete a job
EmployerRoute.delete("/:id/jobs/:jobId", async (req, res) => {
  const job = await Job.findByPk(req.params.jobId);
  job.title = req.body.title;
  job.description = req.body.description;
  job.location = req.body.location;
  job.salary = req.body.salary;
  await job.save();
});

// edit employer account
EmployerRoute.patch("/:id", async (req, res) => {
  const employer = await Employer.findByPk(req.params.jobId);
  employer.name = req.body.name;
  employer.email = req.body.email;
  await employer.save();
  res.status(200).send("Account Updated");
});

// delete employer account
EmployerRoute.delete("/:id", async (req, res) => {
  const employer = await Employer.findByPk(req.params.id);
  await employer.destroy();
  res.status(200).send("Account deleted");
});

module.exports = EmployerRoute;
