const express = require("express");
const path = require("path");
const app = express();
const logger = require("./middleware/Logger");
const basicAuth = require("./_helpers/basic-auth");
const errorHandler = require("./_helpers/error-handler");

//adding the middleware for the parsing

//for form submition

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//creating a middleware
//which is inside the middleware folder and exported
//inittilizing the middleware logger
//app.use(logger);

//static folder
//app.use(express.static(path.join(__dirname, "public")));

//this route get all members
app.use(basicAuth);

app.use("/api/members", require("./routes/api/members"));

app.use("/users", require("./routes/users/users.controller"));

app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
