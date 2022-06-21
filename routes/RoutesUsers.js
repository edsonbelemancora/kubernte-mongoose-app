const express = require("express");
const router = express.Router();
const Users = require("../models/Users");


router.post("/add", function(req, res) {
  let addUsers = new Users(req.body);
     addUsers.save(function(err) {
      if (err) {
        res.send(err);
      } else {
      res.send("Saved beacon.");
      }
    });
});

router.get("/", function(req, res) {
  Users.find(function(err, users) {
    if (err) {
      res.send(err);
    } else {
      res.send(users);
    }
  });
});

router.get("/:userId", function(req, res) {
  Users.findOne(req.params, function(err, users) {
    if (err) {
      res.send(err);
    } else if (users) {
      res.send(users);
    } else {
      res.send("Users not found...");
    }
  });
});

module.exports = router;
