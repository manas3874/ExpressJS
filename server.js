const http = require("http");

const express = require("express");

const app = express();
app.use((request, response, next) => {
  console.log("here now");
});
const server = http.createServer(app);

server.listen(3000);
