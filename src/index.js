// require("dotenv").config({ path: "./env" }); // disturb code consistency
import dotenv from "dotenv"; // lekin yeh likhne se chalega nhi, config bhi karna hota hai
// yeh import method documentation me available nhi hai, but we can use it by experimental feature ke through use kar skte hai, go to package.json - In script, "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"

// env variable me jab bhi changes hoge, manually run karna hoga fir se

import connectDB from "./db/index.js"; // ./db or ./db/index.js

dotenv.config({
  path: "./env",
});

connectDB();

























/*
// first approach to connect database but this pollute the index.js file
import mongoose from "mongoose";
import { DB_NAME } from "./constants";

import express from "express";
const app = express();

// // Database Connect
// function connectDB(){}
// connectDB()
// Have a better approach - iife
// ;( async ()=>{} )() // professional coding while starting iife, we use ; for cleaning purposes, sometimes when writes old line doesn't have ; then it create problem in iife

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    // listener, express part 
    app.on("error",(error)=>{     // db toh connect ho gya hai, express ki app h bo baat nhi kar pa rhi 
      console.log(`Application does not able to talk to the database. ERROR: ${error}`);
      throw error
    })
    
    app.listen(process.env.PORT,()=>{
      console.log(`Application is listening on port ${process.env.PORT}`);
    })
  } catch (error) {
    console.log("ERROR: ", error);
    throw error;
  }
})();

*/
