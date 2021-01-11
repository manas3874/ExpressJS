const express = require("express");
const router = express.Router();
const rootPath = require("../helperFunctions/path");
// ! handle 404 page
router.use("/", (request, response, next) => {
  response.status(404).sendFile(rootPath + "/htmlDocs/404.html");
});

module.exports = router;
