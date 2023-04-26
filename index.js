// Import needed modules
const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");

// Pages routes
const RegisterRoute = require("./src/routes/register");
const LoginRoute = require("./src/routes/login");
const LogoutRoute = require("./src/routes/logout");
const JobListingsRoute = require("./src/routes/jobListings");
const JobRoute = require("./src/routes/job");
const EmployerRoute = require("./src/routes/employer");
const SeekerRoute = require("./src/routes/seeker");
const Job = require("./src/models/Job");

// API route
const APIRouter = require("./src/routes/API/main");

// Importing DB model middleware function
const { HandleDBModel } = require("./src/helpers/HandleDBModel");

// Initializing express
const app = express();
const port = process.env.PORT || 3000;

// EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Setting the public folder
app.use(express.static(path.join(__dirname, "public")));

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(HandleDBModel);
app.use(multer().array());

// Routes
app.use("/api", APIRouter);
app.use("/register", RegisterRoute);
app.use("/login", LoginRoute);
app.use("/job", JobRoute);
app.use("/jobs", JobListingsRoute);
app.use("/employer", EmployerRoute);
app.use("/seeker", SeekerRoute);
app.use("/logout", LogoutRoute);

// sessions and cookies
const cookieParser = require("cookie-parser");
const session = require("express-session");
app.use(cookieParser());
app.use(
  session({
    secret: "sign cookie",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 3600000 },
  })
);

// Home route
app.get("/", async (req, res) => {
  const jobs = await Job.findAll();
  res.status(200).render("home", { jobs });
});

// About route
app.get("/about", (req, res) => {
  res.render("about");
});

// Error 404 route
app.get("*", (req, res) => {
  res.status(404).render("error");
});

// Listening for incoming requests
app.listen(3000, () => {
  console.log(`Server started listening on port ${port}`);
});
