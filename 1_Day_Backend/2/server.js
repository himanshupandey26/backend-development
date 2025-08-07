const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(express.json());


app.listen(port, ()=>{
    console.log(`Server is running on port number ${port}`);
})


app.get('/', (req,res)=>{
    console.log(`Homepage`);
    res.send(`Homepage!!!`)
})
app.get('/about', (req,res)=>{
    console.log(`About`);
    res.send(`about!!!`)
})
app.get('/contact', (req,res)=>{
    res.send(`contact!!!`)
})
app.get('/api', (req,res)=>{
    res.send(`api!!!`)
})

app.post('/api/car',(req,res)=>{
    const {name, brand} = req.body;
    console.log(`Name: ${name} and Brand: ${brand}`);
    res.send(`Car details saved successfully`);
})