const express = require('express');
const app = express();

const port = 4000;

app.get('/', (req,res)=>{
    res.send(`Homepage!!!`)
})
app.get('/about', (req,res)=>{
    res.send(`about!!!`)
})
app.get('/contact', (req,res)=>{
    res.send(`contact!!!`)
})
app.get('/api', (req,res)=>{
    res.send(`api!!!`)
})

app.listen(port, ()=>{
    console.log(`Server is running on port number ${port}`);
})
