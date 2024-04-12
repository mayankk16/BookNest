import dotenv from "dotenv"
import {app} from './app.js'
import mongoose from 'mongoose';
mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
dotenv.config({
    path: './.env'
})


app.listen(7000, () => {
    console.log(`⚙️ Server is running at port 7000`);
})

