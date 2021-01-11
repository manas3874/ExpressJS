// ! package imports
const express = require("express");

// ! private modules import
const ignoreFavicon = require("./helperFunctions/ignoreFavicon");
const indexRoutes = require("./routes/index");
const formsRoutes = require("./routes/forms");
const handle404Route = require("./routes/handle404");
const rootPath = require("./helperFunctions/path");
// ! creating an express app
const app = express();

// ! ***********************************************
// ! Middlewares
// ! ***********************************************

// ! handle the favicon request
app.use("/favicon.ico", (request, response, next) => {
  ignoreFavicon(request, response);
});
// ! serve static files

app.use(express.static(rootPath + "/public"));
// ! handle routes
app.use(formsRoutes);
app.use(indexRoutes);
app.use(handle404Route);
// ! Listening at port 3000
app.listen(3000);
