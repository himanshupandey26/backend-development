require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const app = express();

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{console.log(`DB connected !!!`);})
.catch(
    (err)=>{
        console.log(`Error : ${err}`);
        process.exit(1); // 🔥 App stops if DB fails
    });

app.get('/',(req,res)=>{
    res.send(`This is homepage babyyy...`);
})

// const port = process.env.PORT;
const port = process.env.PORT || 4000;


app.listen(port, ()=>{
    console.log(`Server running...!!!`);
})