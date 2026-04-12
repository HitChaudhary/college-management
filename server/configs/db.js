import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.once("connected", () => {
      console.log("Database connected successfully");
    });

    await mongoose.connect(`${process.env.MONGODB_URI}/college`);

  } catch (error) {
    console.error("Database connection error:", error.message);
  }
};

export default connectDB;
