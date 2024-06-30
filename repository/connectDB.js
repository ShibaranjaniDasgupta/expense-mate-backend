const { default: mongoose } = require("mongoose");

const connectMongoDB = async () => {
  const mongoURI =
    "mongodb+srv://adityabasak360:Aditya_1234@cluster0.icftfll.mongodb.net/expense-tracker";

  // Connect to MongoDB
  await mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB connected...");
};

const disconnectDb = async () => {
  await mongoose.disconnect();
};

module.exports = { connectMongoDB, disconnectDb };
