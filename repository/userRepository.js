const mongoURI =
  "mongodb+srv://adityabasak360:Aditya_1234@cluster0.icftfll.mongodb.net/expense-tracker";
// Connect to MongoDB
await mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
console.log("MongoDB connected...");

const findUser = async (loginDetails) => {
  return await User.findOne({
    email: loginDetails.email,
    password: loginDetails.password,
  });
};

const registerNewUser = async (userData) => {
  try {
    const newuser = new User(userData);
    await newuser.save();
  } catch (error) {
    throw error;
  } finally {
    await mongoose.disconnect();
  }
};

module.exports = { registerNewUser };
