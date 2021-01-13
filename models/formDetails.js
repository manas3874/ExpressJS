// const subscribers = [];
const getDb = require("../helperFunctions/database").getDb;

module.exports = class formDetails {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }
  save() {
    const db = getDb();
    db.collection("users")
      .insertOne(this)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }
  show() {
    console.log("added");
  }
};
