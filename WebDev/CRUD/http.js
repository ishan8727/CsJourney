const express = require('express');
const app = express();

app.get('/mul',(req,res)=>{
    const a = req.query.a;
    const b = req.query.b;
    
    res.send(a*b);
})

app.get('/add', (req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.send((a+b).toString());
})

app.get('/sub',(req,res)=>{
    const a = req.query.a;
    const b = req.query.b;

    res.send(a-b);
})

app.get('/div',(req,res)=>{
    const a = req.query.a;
    const b = req.query.b;

    res.send(a/b);
})


app.listen(3001);