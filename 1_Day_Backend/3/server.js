require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{console.log(`🟢 Mongodb connected successfully....!!!`);})
.catch((error)=>{console.log(`🔴 Error while connecting to DB: ${error}`)});

app.get('/',(req,res)=>{
    res.send(`We are on homepage, Kaisee ho !!!!!`);
})
app.post('/add',(req,res)=>{
    const {name,age,gender='male',contactNo:phoneNo} = req.body;
    console.log("Name: ",name);
    console.log("Age: ",age);
    console.log("Gender: ",gender);
    console.log("ContactNo: ",contactNo);
    console.log("ContactNo: ",phoneNo);

    res.send(`Data is saved !!!!`);
})


const port = process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log(`🔥 Server running at http://localhost:${port}`);
})