const { request, response } = require("express");
const rootPath = require("../helperFunctions/path");
// ! model constructor
const formDetailsObject = require("../models/formDetails");
const sendForm = (request, response, next) => {
  response.sendFile(rootPath + "/views/form.html");
};
const sendDeleteForm = (request, response, next) => {
  response.sendFile(rootPath + "/views/deleteForm.html");
};
var currentDetails = {};
const getFormDetails = (request, response, next) => {
  // console.log(request.body);
  if (!request.body.toDelete) {
    currentDetails = new formDetailsObject(...Object.values(request.body));
    currentDetails.save();
    // currentDetails.show();
    response.redirect("/thanks");
  } else if (request.body.toDelete) {
    currentDetails = request.body.toDelete;
    // console.log(currentDetails);
    response.redirect("/delete");
  }
};

const thankYouPage = (request, response, next) => {
  response.render("thanks", {
    name: currentDetails.fullname,
    email: currentDetails.email,
    pageTitle: "Thank you",
  });
  // response.sendFile(rootPath + "/views/thanks.html");
};

const deletePage = (request, response, next) => {
  response.render("delete", { name: currentDetails });
  formDetailsObject.deleteEntry(currentDetails);
};
module.exports = {
  sendForm: sendForm,
  getFormDetails: getFormDetails,
  thankYouPage: thankYouPage,
  deletePage: deletePage,
  sendDeleteForm: sendDeleteForm,
};
