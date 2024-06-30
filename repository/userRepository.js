const User = require("../models/user");
const { connectMongoDB, disconnectDb } = require("./connectDB");

const findUser = async (loginDetails) => {
  try {
    await connectMongoDB();
    return await User.findOne({
      email: loginDetails.email,
      password: loginDetails.password,
    });
  } catch (error) {
    throw error;
  } finally {
    disconnectDb();
  }
};

const registerNewUser = async (userData) => {
  try {
    await connectMongoDB();
    const newuser = new User(userData);
    await newuser.save();
  } catch (error) {
    throw error;
  } finally {
    disconnectDb();
  }
};

module.exports = { registerNewUser, findUser };
