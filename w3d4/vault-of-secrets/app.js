const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const logger = require("morgan");

const mainRouter = require("./routes/main");
const apiRouter = require("./routes/api");
const { getUserByEmail } = require("./helpers/userHelpers");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cookieSession({
    name: "session",
    keys: ["Axa9jxko0s!", "I like potatoes!"],
  })
);
app.use(express.static(path.join(__dirname, "public")));

// MIDDLEWARE OF DESTINY!

app.use((req, res, next) => {
  const whiteList = ["/login","/register"]
  const { user } = getUserByEmail(req.session.email);

  if(user || whiteList.includes(req.path)){
    return next()
  }

  return res.redirect("/login")
});

app.use("/", mainRouter);
app.use("/api", apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
