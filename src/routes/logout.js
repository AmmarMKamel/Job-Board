const LogoutRoute = express.Router();

// logout user
LogoutRoute.post("/", async (req, res) => {
    req.session.destroy();
    res.clearCookie("connect.sid");
    res.status(200).redirect("/");
  });

  module.exports = LogoutRoute;