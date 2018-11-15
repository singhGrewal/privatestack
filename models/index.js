const mongoose = require("mongoose");
const URI = require("../config");

mongoose.connect(process.env.MONGODB_URI || URI);

// When successfully connected
mongoose.connection.on("connected", () => {
  console.log("MongoDb Connected");
});

// When connection throws an error
mongoose.connection.on("error", err => {
  console.log("MongoDb Error : " + err);
});
