const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");

// Import the route here
const RegisterRoute = require("./src/routes/register");
const LoginRoute = require("./src/routes/login");
const JobListingsRoute = require("./src/routes/jobListings");
const JobDetailsRoute = require("./src/routes/job");
const EmployerRoute = require("./src/routes/employerDashboard");
const SeekerRoute = require("./src/routes/seekerDashboard");
const APIRouter = require("./src/routes/API/main");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(multer().array());
app.use("/api", APIRouter);
app.use("/register", RegisterRoute);
app.use("/login", LoginRoute);
app.use("/job-details", JobDetailsRoute);
app.use("/job-listings", JobListingsRoute);
app.use("/employer", EmployerRoute);
app.use("/seeker", SeekerRoute);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

// TODO: Implement a route for 404 pages
app.get("*", (req, res) => {
  res.status(404).render("error");
});

app.listen(3000, () => {
  console.log(`Server started listening on port ${port}`);
});
