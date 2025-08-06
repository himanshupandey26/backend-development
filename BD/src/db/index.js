import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    ); // mongoose return a object
    // app wagera connect nhi karege, our aim is to purely connect DB
    console.log(
      `Mongo connected !!! DB Host ${connectionInstance.connection.host}`
    ); // check what is connectionInstance have ???
  } catch (error) {
    console.log(`MONGODB connection FAILED ${error}`);
    process.exit(1); // throw karege tab bhi exit karega, node access deta hai 'process' ka
  }
};

export default connectDB;
