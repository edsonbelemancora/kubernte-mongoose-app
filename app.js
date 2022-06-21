const express = require("express");
const app = express();
const mongoose = require("mongoose");
const assert = require("assert");
const cors = require("cors");

const usersRoute = require("./routes/RoutersUsers");

const mongoDbUrl = "mongodb://localhost:27017/userdb";


let mongoDbOptions = {
  // ssl: true,
  // sslValidate: true,
  useNewUrlParser: true
};

  
mongoose.connect(mongoDbUrl, mongoDbOptions);
 

app.use(require("body-parser").json());
app.use(cors());
app.use("/users",usersRoute);



let port = 8181;
app.listen(port, function() {
  console.log(" listenter  http://localhost:" + port);
});

module.exports = app;