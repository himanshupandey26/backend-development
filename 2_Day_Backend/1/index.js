const express = require('express');
const app = express();

require("dotenv").config();
const port = process.env.PORT || 4000;

app.use(express.json());


const todoRoutes = require("./routes/todo");
// const getAllTodosRoutes = require("./routes/todo");

app.use('/api/v1', todoRoutes);

app.listen(port, ()=>{
    console.log(`Server is running...!!!`);
})

const connectDB = require("./config/database");
connectDB();

app.get('/',(req, res)=>{
    res.send(`This is default page...!!!`);
})