const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;
const mongoConnectMethod = (callback) => {
  MongoClient.connect(
    "mongodb+srv://manasExpress:cancer@123@expresstextdb.4zakb.mongodb.net/ExpressTextDB?retryWrites=true&w=majority",
    { useUnifiedTopology: true }
  )
    .then((client) => {
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No DB found";
};
module.exports = { mongoConnectMethod: mongoConnectMethod, getDb: getDb };
