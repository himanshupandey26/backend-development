const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = ()=>{
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log(`DB connected successfully...!!!`);
    })
    .catch((error)=>{
        console.error(`DB connection failed...!!!`);
        process.exit(1);
    });
}

module.exports = connectDB;