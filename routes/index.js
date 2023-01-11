var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("index");
  res.render("index", { title: "Express" });
});

router.get("/about", function (req, res, next) {
  res.render("about", { title: "About me" });
});

router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Contact" });
});

module.exports = router;
