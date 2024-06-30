const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Group = require("../models/group");
router.post("", async function (req, res) {
  try {
    console.log(req.body);

    const mongoURI =
      "mongodb+srv://adityabasak360:Aditya_1234@cluster0.icftfll.mongodb.net/expense-tracker";
    // Connect to MongoDB
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected...");

    const group = new Group(req.body);
    // Save the group to the database
    const savedGroup = await group.save();

    await mongoose.disconnect();

    res.status(201).json({});
  } catch (e) {
    res.status(500).json(e);
  }
});
module.exports = router;
