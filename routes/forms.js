const { request, response } = require("express");
const express = require("express");
const router = express.Router();
const path = require("path");
const rootPath = require("../helperFunctions/path");
router.use(express.urlencoded({ extended: true })); // ? body-parser in use (can also use express.urlencoded)

// ! input form handling
router.use("/form", (request, response, next) => {
  response.sendFile(rootPath + "/htmlDocs/form.html");
});
router.post("/form-input", (request, response, next) => {
  console.log(request.body);
  response.redirect("/thanks");
});
router.use("/thanks", (request, response, next) => {
  response.sendFile(rootPath + "/htmlDocs/thanks.html");
});
module.exports = router;
