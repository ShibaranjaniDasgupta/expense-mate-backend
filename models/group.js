const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema(
  {
    //name of the group
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    members: {
      type: [{ email: String }],
      required: true,
    },
  },
  {
    collection: "groups", // Specify the collection name
  }
);

module.exports = mongoose.model("Group", groupSchema);
