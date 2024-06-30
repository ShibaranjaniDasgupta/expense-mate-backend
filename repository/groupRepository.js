const { connectMongoDB, disconnectDb } = require("./connectDB");

let mongoose;
const createGroup = async (groupInfo) => {
  try {
    mongoose = connectMongoDB();
    const group = new Group(groupInfo);
    // Save the group to the database
    const savedGroup = await group.save();
  } catch (error) {
    throw error;
  } finally {
    await disconnectDb();
  }
};

module.exports = { createGroup };
