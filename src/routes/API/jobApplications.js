const express = require("express");
<<<<<<< HEAD
const Employers = require("../../models/Employer");
const employersAPIRouter = express.Router();
=======
const jobAppsAPIRouter = express.Router();
const JobApps = require("../../models/jobApplications");
>>>>>>> origin/mohamed

employersAPIRouter.get("/", (req, res) => {
  Employers.findAll()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json(err.message));
});

employersAPIRouter.post("/", (req, res) => {
  Employers.create({ ...req.body })
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json(err.message));
});

employersAPIRouter.patch("/:id", (req, res) => {
  Employers.update({ ...req.body }, { where: { id: req.params.id } })
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json(err));
});

<<<<<<< HEAD
employersAPIRouter.delete("/:id", (req, res) => {
  Employers.destroy({ where: { id: req.params.id } })
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json(err));
});

module.exports = employersAPIRouter;
=======
module.exports = jobAppsAPIRouter;
>>>>>>> origin/mohamed
