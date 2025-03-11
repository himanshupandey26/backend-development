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