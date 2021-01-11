const express = require("express");
const router = express.Router();
// const path = require("path");
const rootPath = require("../helperFunctions/path");
// ! article page handling
router.get("/article", (request, response, next) => {
  response.sendFile(path.join(__dirname + "/../htmlDocs/article.html"));
});

// ! Keep the root OR homepage at the end
router.get("/", (request, response, next) => {
  console.log(rootPath);
  response.sendFile(rootPath + "/htmlDocs/index.html");
});

module.exports = router;
