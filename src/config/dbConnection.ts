import mongoose from "mongoose";
import config from "./config";

const mongoose_Url = process.env;

const dbConnection = async () => {
  try {
    await mongoose.connect(config.MONGO_URI ?? "");
    console.log("Connected to MongoDB");
  } catch (error) {
    throw new Error("Error connecting to MongoDB");
  }
};

export default dbConnection;
