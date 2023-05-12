const express = require("express");
const EmployerRoute = express.Router();
const Employer = require("../models/Employer");
const Job = require("../models/Job");
const JobApplication = require("../models/JobApplication");
const Seeker = require("../models/Seeker");

// Employer dashboard
EmployerRoute.get("/:id", async (req, res) => {
  const employer = await Employer.findByPk(req.params.id);
  const jobs = await Job.findAll({ where: { employer_id: employer.id } });
  res.status(200).render("employer", { employer, jobs });
});

// Delete employer's account
EmployerRoute.delete("/:id", async (req, res) => {
  const employer = await Employer.findByPk(req.params.id);
  employer
    .destroy()
    .then(() => res.status(200).redirect("/"))
    .catch((err) => res.status(500).json(err.message));
});

// Edit employer's info
EmployerRoute.post("/edit/:id", (req, res) => {
  Employer.update(
    {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    },
    { where: { id: req.params.id } }
  )
    .then(() => res.status(200).redirect(`/employer/${req.params.id}`))
    .catch((err) => res.status(500).json(err.message));
});

// View applicants
EmployerRoute.get("/job/applicants/:id", async (req, res) => {
  try {
    const job = await Job.findByPk(req.params.id);
    const jobApplications = await JobApplication.findAll({
      where: { job_id: req.params.id },
    });
    const applicantIds = jobApplications.map(
      (JobApplication) => JobApplication.applicant_id
    );
    const applicants = await Seeker.findAll({ where: { id: applicantIds } });
    res.render("applicants", { applicants });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = EmployerRoute;
