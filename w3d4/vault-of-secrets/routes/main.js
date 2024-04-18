const express = require("express");
const { authenticateUser, createUser, getUserByEmail } = require("../helpers/userHelpers");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  const {email} = req.session

  const {user} = getUserByEmail(email)

  const templateVars = {user:null}

  if(user){
    templateVars.user = user
  }

  return res.render("index", templateVars);
});

router.get("/login", function (req, res) {
  return res.render("login");
});
router.get("/register", function (req, res) {
  return res.render("register");
});
router.get("/dashboard", function (req, res) {
  return res.render("dashboard");
});

router.post("/logout", function (req, res) {
  res.clearCookie("session")
  return res.redirect("/");
});

router.post("/login", function (req, res) {
  const { email, password } = req.body;

  const { user, error } = authenticateUser(email, password);

  if (error) {
    console.log(error);
    return res.redirect("/login");
  }

  req.session.email = user.email
  return res.redirect("/");
});

router.post("/register", function (req, res) {

  const {user, error} = createUser(req.body)

  if(error){
    console.log(error);
    return res.redirect("/register");
  }

  req.session.email = user.email
  return res.redirect("/");
});

module.exports = router;
