import dotenv from "dotenv"
import {app} from './app.js'
import mongoose from 'mongoose';

dotenv.config({
    path: './.env'
})

const PORT = process.env.PORT || 7000;
mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
.then(() => {
    console.log(`mongodb connected`);
    app.listen(PORT, () => {
        console.log(`⚙️ Server is running at port ${PORT}`);
    })
})
.catch((err) => {
    console.log(err);
})




