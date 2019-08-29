const express = require("express");
const path = require("path");
const app = express();
const logger = require("./middleware/Logger");
//adding the middleware for the parsing
app.use(express.json());

//for form submition

app.use(express.urlencoded({ extended: false }));

//creating a middleware
//which is inside the middleware folder and exported
//inittilizing the middleware logger
//app.use(logger);

//static folder
//app.use(express.static(path.join(__dirname, "public")));

//this route get all members

app.use("/api/members", require("./routes/api/members"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("server is running");
});
