// ! package imports
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

// ! private modules import
const ignoreFavicon = require("./helperFunctions/ignoreFavicon");

// ! creating an express app
const app = express();

// ! ***********************************************
// ! Middlewares
// ! ***********************************************

app.use(bodyParser.urlencoded({ extended: true })); // ? body-parser in use (can also use express.urlencoded)

// ! handle the favicon request
app.use("/favicon.ico", (request, response, next) => {
  ignoreFavicon(request, response);
});
// ! input form handling
app.use("/form", (request, response, next) => {
  response.sendFile(path.join(__dirname + "/htmlDocs/form.html"));
});
app.use("/form-input", (request, response, next) => {
  console.log(request.body);
  response.redirect("/");
});
// ! article page handling
app.use("/article", (request, response, next) => {
  // console.log(request.url);
  response.sendFile(path.join(__dirname + "/htmlDocs/article.html"));
});
// ! Keep the root OR homepage at the end
app.use("/", (request, response, next) => {
  // console.log(request.url);
  response.sendFile(path.join(__dirname + "/htmlDocs/index.html"));
});

// ! Listening at port 3000
app.listen(3000);
