const { request, response } = require("express");

const ignoreFavicon = (request, response) => {
//   console.log("ignore " + request.url);
  response.status(204).end();
};

module.exports = ignoreFavicon;
