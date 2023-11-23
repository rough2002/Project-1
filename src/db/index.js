import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
console.log(process.env.PASSWORD);
const dbString = process.env.MONGODB_URI.replace(
  "<password>",
  process.env.PASSWORD
);
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${dbString}/${DB_NAME}`);
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection FAILED ", error);
    process.exit(1);
  }
};

export default connectDB;
