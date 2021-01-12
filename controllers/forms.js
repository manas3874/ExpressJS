const rootPath = require("../helperFunctions/path");
// ! model constructor
const formDetailsObject = require("../models/formDetails");
const sendForm = (request, response, next) => {
  response.sendFile(rootPath + "/views/form.html");
};
var currentDetails = {};
const getFormDetails = (request, response, next) => {
//   console.log(request.body);
  currentDetails = new formDetailsObject(...Object.values(request.body));
  currentDetails.save();
  currentDetails.show();
  response.redirect("/thanks");
};

const thankYouPage = (request, response, next) => {
  response.render("thanks", {
    name: currentDetails.fullname,
    email: currentDetails.email,
    pageTitle: "Thank you",
  });
  // response.sendFile(rootPath + "/views/thanks.html");
};
module.exports = {
  sendForm: sendForm,
  getFormDetails: getFormDetails,
  thankYouPage: thankYouPage,
};
