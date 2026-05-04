// config/db.ts
import mongoose from "mongoose";

// Connect to MongoDB
export const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is missing");
  }

  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB connected");
};