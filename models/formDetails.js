const subscribers = [];

module.exports = class formDetails {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }
  save() {
    subscribers.push(this);
  }
  show() {
    console.log(subscribers);
  }
};
