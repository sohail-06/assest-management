import mongoose from "mongoose";
const mongoose_Url =process.env;

const dbConnection = async () => {
  try {
    await mongoose.connect(mongoose_Url);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw new Error("Error connecting to MongoDB");
  }
};

export default dbConnection;
