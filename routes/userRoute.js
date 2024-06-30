const express = require("express");
const { registerNewUser, findUser } = require("../repository/userRepository");

const router = express.Router();

router.post("/login", async function (req, res) {
  try {
    const result = findUser(req.body);
    console.log(result);
    if (result) {
      res.send(result);
    } else {
      res.status(500).json("Error");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/register", async function (req, res) {
  try {
    registerNewUser(req.body);
    res.send("User registered successfully");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
