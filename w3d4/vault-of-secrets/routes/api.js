const express = require("express");
const { getAllUsers } = require("../helpers/userHelpers");
const router = express.Router();

router.get("/users", function (req, res) {
  const users = getAllUsers()

  return res.json(users)
});

module.exports = router;
