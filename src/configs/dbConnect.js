import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const url = process.env.DATABASE_URL;
    // console.log("This", url);
    await mongoose.connect(url);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
