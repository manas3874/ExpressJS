const express = require("express");
const router = express.Router();
const handle404 = require("../controllers/handle404");
// ! handle 404 page
router.use("/", handle404.handle404);

module.exports = router;
