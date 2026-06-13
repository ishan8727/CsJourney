const express = require('express');
const ejs = require('ejs')
const fs = require('fs');
const path = require('path')

const app = express();

app.set('view engine', "ejs");

const template = `
    <h2> Hello from server via ejs</h2>
    <p>My name is: <%= name %></p>
    <p> Today is : <%= date %> </p>
    <p> 1+2 is: <%= 1+2 %>
    `

    const data = {
        name: 'Ishan',
        date: new Date().toISOString().split('T')[0]
    }

    const output = ejs.render(template, data);


    app.get('/',(req, res)=>{
        res.send(output);
    })

app.listen(3000, ()=>{
    console.log('Server running on 3k port!');
});