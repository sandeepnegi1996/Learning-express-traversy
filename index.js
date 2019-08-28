const express = require("express");
const path = require("path");
const app = express();
const members = require("./Members");
const logger = require("./middleware/Logger");

//creating a middleware
//which is inside the middleware folder and exported
//inittilizing the middleware logger
//app.use(logger);

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
