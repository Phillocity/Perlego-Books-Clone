import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const mongoConnection: string = process.env.MONGO_CONNECTION_STRING || "";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoConnection);
    console.log("Database Connected");
  } catch (error) {
    console.log("Error connecting to MongoDB");
  }
};

export default connectDB;
