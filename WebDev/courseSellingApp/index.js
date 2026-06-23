const express = require('express');
const userRouter = require('./router/userRouter');
const courseRouter = require('./router/courseRouter');

const app = express();

// user router
app.use('/user/api/v1', userRouter );

// // use this somehow......
// app.post('/course/purchase',(req,res)=>{

// })

// app.get("/courses/preview", (req, res) => {

// });

courseRouter(app);


app.listen(3000,()=>{
    console.log('Port running on 3k');
})

module.exports = app;
