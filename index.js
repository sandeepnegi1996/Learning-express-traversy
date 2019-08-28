const express = require("express");
const path = require("path");
const app = express();
const members = require("./Members");

//creating a middleware

const logger = (req, res, next) => {
  console.log(`this is the protocol of the request ${req.protocol} `);
  next();
};

//inittilizing the middleware logger
app.use(logger);

//static folder
//app.use(express.static(path.join(__dirname, "public")));

//this route get all members
app.get("/api/members", (req, res) => {
  res.json(members);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("server is running");
});
