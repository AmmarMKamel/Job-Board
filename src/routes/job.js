const express = require("express");
const JobRoute = express.Router();
const Job = require("../models/Job");
const Employer = require("../models/Employer");
const JobApplication = require("../models/JobApplication");

// View job details
JobRoute.get("/:id", async (req, res) => {
  const job = await Job.findByPk(req.params.id);
  res.status(200).render("job-details", { job });
});

// Add a new job
JobRoute.post("/:id", async (req, res) => {
  const employer = await Employer.findByPk(req.params.id);
  Job.create({
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    salary: req.body.salary,
    company: req.body.company,
    level: req.body.level,
    type: req.body.type,
    employer_id: employer.id,
  })
    .then(() => res.status(200).redirect(`/employer/${employer.id}`))
    .catch((err) => res.status(500).json(err.message));
});

// Edit job info
JobRoute.post("/edit/:id", async (req, res) => {
  try {
    const job = await Job.findByPk(req.params.id);
    const { title, description, company, location, level, type, salary } =
      req.body;
    await Job.update(
      {
        title,
        description,
        company,
        location,
        level,
        type,
        salary,
      },
      { where: { id: req.params.id } }
    );
    res.redirect(`/employer/${job.employer_id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// Delete a job
JobRoute.post("/delete/:id", async (req, res) => {
  const job = await Job.findByPk(req.params.id);
  await JobApplication.destroy({ where: { job_id: req.params.id } });
  Job.destroy({ where: { id: req.params.id } })
    .then(() => res.status(200).redirect(`/employer/${job.employer_id}`))
    .catch((err) => res.status(500).json(err.message));
});

module.exports = JobRoute;
