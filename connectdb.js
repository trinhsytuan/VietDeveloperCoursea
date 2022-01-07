const { MongoClient } = require("mongodb");
const link = "mongodb+srv://test:123456a@cluster0.uutvr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(link, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  if (err) {
    console.log("Co loi:\n");
    console.log(err);
  }
  console.log("Ket noi thanh cong MongoDB");
});

module.exports = client;