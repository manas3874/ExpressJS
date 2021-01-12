// ! package imports
const express = require("express");
const expressHandlebars = require("express-handlebars");
// ! private modules import
const ignoreFavicon = require("./helperFunctions/ignoreFavicon");
const indexRoutes = require("./routes/index");
const formsRoutes = require("./routes/forms");
const handle404Route = require("./routes/handle404");
const rootPath = require("./helperFunctions/path");
const mongoConnect = require("./helperFunctions/database");
// ! creating an express app
const app = express();

// ! initializing handlebars templating engine
app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", rootPath + "/views/");
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

mongoConnect((client) => {
  console.log("connected to mongo and running on PORT:3000");
  app.listen(3000);
});
