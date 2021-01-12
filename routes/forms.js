const express = require("express");
const router = express.Router();

// ! using the controller methods
const formControllers = require("../controllers/forms");
router.use(express.urlencoded({ extended: true })); // ? body-parser in use (can also use express.urlencoded)

// ! input form handling
router.use("/form", formControllers.sendForm);
var formDetails = {};
router.post("/form-input", formControllers.getFormDetails);
router.use("/thanks", formControllers.thankYouPage);
module.exports = router;
