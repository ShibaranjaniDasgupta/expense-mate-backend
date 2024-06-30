const express = require("express");
const Group = require("../models/group");

const router = express.Router();

router.post("", async function (req, res) {
  try {
    await createGroup(req.body);
    res.status(201);
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
