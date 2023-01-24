var express = require("express");
var router = express.Router();

const index_controller = require("../controllers/indexController");

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("index");
  res.render("index", { title: "Art by Lynn", at_page: "home" });
});

router.get("/gallery", function (req, res, next) {
  res.render("gallery/index", {
    title: "Gallery",
    at_page: "gallery",
  });
});

router.get("/about", function (req, res, next) {
  res.render("about/index", {
    title: "About me",
    at_page: "about",
  });
});

router.get("/contact", function (req, res, next) {
  res.render("contact/index", {
    title: "Contact",
    at_page: "contact",
  });
});

router.post("/contact", index_controller.contact_form_post);

module.exports = router;
