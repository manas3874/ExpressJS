const express = require("express");
const { deletePage } = require("../controllers/forms");
const router = express.Router();

// ! using the controller methods
const formControllers = require("../controllers/forms");
router.use(express.urlencoded({ extended: true })); // ? body-parser in use (can also use express.urlencoded)

// ! input form handling
router.use("/form", formControllers.sendForm);
router.use("/deleteForm", formControllers.sendDeleteForm);

var formDetails = {};
router.post("/form-input", formControllers.getFormDetails);
router.post("/delete", formControllers.getFormDetails);
router.use("/thanks", formControllers.thankYouPage);
router.use("/delete", formControllers.deletePage);
module.exports = router;
