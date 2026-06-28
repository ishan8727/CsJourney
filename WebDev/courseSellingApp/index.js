const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./router/user');
const courseRouter = require('./router/course');
const adminRouter = require('./router/admin')

const app = express();

app.use('/api/v1/user', userRouter );
app.use("api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

app.listen(3000,()=>{
    console.log('Port running on 3k');
})

module.exports = app;
