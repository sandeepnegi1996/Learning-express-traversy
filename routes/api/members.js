const members = require("../../Members");
const express = require("express");
const router = express.Router();
const uuid = require("uuid");

router.get("/", (req, res) => {
  res.json(members);
});

router.get("/:id", (req, res) => {
  const found = members.some(member => {
    return member.id === parseInt(req.params.id);
  });
  console.log(found);

  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `no record with it ${req.params.id} ` });
  }
});

//post request some datg

router.post("/", (req, res) => {
  const newmember = {
    id: uuid.v4(),
    name: req.body.name
  };
  //if name is not entered throw an error

  if (!newmember.name) {
    return res.status(400).json(`please enter the name`);
  }
  members.push(newmember);
  res.send(members);
});

module.exports = router;
