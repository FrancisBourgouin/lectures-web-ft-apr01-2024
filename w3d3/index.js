const express = require("express");
const cookieParser = require("cookie-parser");

const thieves = require("./data/thiefData");
const {
  authenticateThief,
  findThiefByEmail,
  addNewThief,
} = require("./helpers/thiefHelpers");

const app = express();
const port = 8080;

app.use(cookieParser());
app.use(express.static("public")); // Everything in the folder "public" will be accessible without having to build a route
app.use(express.urlencoded({ extended: false })); // Take a form string and convert it to an object (req.body)
app.set("view engine", "ejs"); // Tells render to use EJS by default

app.get("/", (req, res) => {
  const { email, language } = req.cookies;

  const templateVars = { thief: null };
  const selectedLanguage = language === "FR" ? "fr" : "en";
  const { thief } = findThiefByEmail(email, thieves);

  if (thief) {
    templateVars.thief = thief;
  }

  return res.render(`${selectedLanguage}/index`, templateVars);
});

app.get("/login", (req, res) => {
  const { error, language } = req.cookies;
  const selectedLanguage = language === "FR" ? "fr" : "en";
  const templateVars = { error };

  res.clearCookie("error")
  return res.render(`${selectedLanguage}/login`, templateVars)
});

app.get("/register", (req, res) => {
  const { error, language } = req.cookies;
  const selectedLanguage = language === "FR" ? "fr" : "en";
  const templateVars = { error };

  res.clearCookie("error")
  return res.render(`${selectedLanguage}/register`, templateVars)
});

app.get("/logout", (req, res) => {
  res.clearCookie("email");

  return res.redirect("/");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const { thief, error } = authenticateThief(email, password, thieves);

  if (error) {
    console.log(error);
    res.cookie("error", "Something went wrong with the authentication");
    return res.redirect("/login");
  }

  res.cookie("email", thief.email);

  return res.redirect("/");
});

app.post("/register", (req, res) => {
  const { thief, error } = addNewThief(req.body, thieves);

  if (error) {
    console.log(error);
    res.cookie("error", error)
    return res.redirect("/register");
  }

  res.cookie("email", thief.email);
  return res.redirect("/");
});

app.listen(port, () => console.log(`Express server running on port ${port}`)); // Start listening to requests on port specified by the port variable
