const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./router/user');
const courseRouter = require('./router/course');
const adminRouter = require('./router/admin')

const app = express();
app.use(express.json());

app.use('/api/v1/user', userRouter );
app.use('/api/v1/admin', adminRouter);
app.use("/api/v1/course", courseRouter);

async function main(){
    await mongoose.connect('mongodb+srv://insan00008_db_user:Sjj7KhJ6MaVFkYV2@cluster0.6nnp8zq.mongodb.net/coursera-app');
    console.log('connected to DB!');

    app.listen(3000, () => {
    console.log("Port running on 3k");
    });
}

main();