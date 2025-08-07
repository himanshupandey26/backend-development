const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.PORT || 4000;

app.use(express.json());

const todoRoutes = require('./routes/todo');
app.use('/api/v1',todoRoutes);

app.listen(port, ()=>{
    console.log(`Server is running at ${port}`);
})

const connectDB = require("./config/database");
connectDB();

app.get('/',(req,res)=>{
    res.send(
        `<h1>This is homepage babyy</h1>`
    )
})