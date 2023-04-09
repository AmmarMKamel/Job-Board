const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");

// Import the route here
// const UsersRoute = require("./src/routes/users");
// const PostsRoute = require("./src/routes/posts");
const RegisterRoute = require("./src/routes/register");
const APIRouter = require("./src/routes/API/main");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(multer().array());
app.use("/api", APIRouter);
// app.use("/users", UsersRoute);
// app.use("/posts", PostsRoute);
app.use("/register", RegisterRoute);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

// TODO: Implement a route for 404 pages

app.listen(3000, () => {
  console.log(`Server started listening on port ${port}`);
});
