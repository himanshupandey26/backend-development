require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = ()=>{
    mongoose.connect(process.env.MONGODB_URI)
        .then(()=>{ console.log(`✅ DB connected!`) })
        
        .catch((error)=>{
            console.log(`Issue in DB connectio`);
            console.error(error.message);
            // process.exit() Node.js ka method hai jo current process ko terminate karta hai.
            // Argument 1 ka matlab hai: ❌ “Something went wrong” (Exit code 0 hota hai success ke liye ✅)
            process.exit(1); // 🔥 App stops if DB fails
        });
}

module.exports = connectDB;