var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json([
    { title: "Blog post 1", content: "AHHHHH YEAH" },
    { title: "Blog post 2", content: "AHHHHH YEAH" },
    { title: "Blog post 3", content: "AHHHHH YEAH" },
    { title: "Blog post 4", content: "AHHHHH YEAH" },
  ]);
});

module.exports = router;
