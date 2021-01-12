const express = require("express");
const router = express.Router();
// const path = require("path");
const rootPath = require("../helperFunctions/path");
// ! article page handling
router.get("/article", (request, response, next) => {
  response.sendFile(rootPath + "/views/article.html");
});
router.get("/article/:articleId", (request, response, next) => {
  // console.log(request.params.articleId);
  console.log(request.query);
  response.sendFile(rootPath + "/views/article.html");
});
// ! Keep the root OR homepage at the end
router.get("/", (request, response, next) => {
  console.log(rootPath);
  response
    .status(200)
    .render("index", { name: "The home page", pageTitle: "Express | Home" });
  // response.sendFile(rootPath + "/views/index.html");
});

module.exports = router;
