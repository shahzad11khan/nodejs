const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://shahzadkhan311666:vjF1VxSjZoHmKRQk@cluster0.axusi.mongodb.net/testlive"
    );
    console.log("Mongo DB Connected Successfully");
  } catch (err) {
    console.log("Mongo DB Connection Error: ", err);
  }
};

module.exports = connectDB;
