import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import myHotelRoutes from './routes/my-hotels.routes.js';
import hotelRoutes from './routes/hotels.routes.js'
import bookingRoutes from './routes/my-bookings.js'
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/my-hotels", myHotelRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/my-bookings", bookingRoutes);

export { app };
