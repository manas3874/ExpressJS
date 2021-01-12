const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnectMethod = (callback) => {
  MongoClient.connect(
    "mongodb+srv://manasExpress:cancer@123@expresstextdb.4zakb.mongodb.net/ExpressTextDB?retryWrites=true&w=majority",
    { useUnifiedTopology: true }
  )
    .then((client) => {
    //   console.log("connected");
      callback(client);
    })
    .catch((err) => console.log(err));
};
module.exports = mongoConnectMethod;
