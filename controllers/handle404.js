const rootPath = require("../helperFunctions/path");
const handle404 = (request, response, next) => {
  response.status(404).render("404", { pageTitle: "error page | 404" });
  // response.status(404).sendFile(rootPath + "/views/404.html");
};

module.exports = { handle404: handle404 };
