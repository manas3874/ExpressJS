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
      .then((result) => console.log("inserted"))
      .catch((err) => console.log(err));
  }
  async show() {
    const db = getDb();
    await db
      .collection("users")
      .find({ fullname: "Adya Tripathi" })
      .toArray()
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }
  static deleteEntry(toDelete) {
    const db = getDb();
    db.collection("users")
      .deleteOne({ fullname: toDelete })
      .then((result) => console.log("deleted"))
      .catch((err) => console.log(err));
  }
};
