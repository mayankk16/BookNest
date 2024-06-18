import dotenv from "dotenv"
import {app} from './app.js'
import mongoose from 'mongoose';

dotenv.config({
    path: './.env'
})

mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
.then(() => {
    console.log(`mongodb connected`);
    app.listen(process.env.PORT || 7000, () => {
        console.log(`⚙️ Server is running at port 7000`);
    })
})
.catch((err) => {
    console.log(err);
})




