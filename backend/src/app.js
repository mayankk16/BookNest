import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"


const app = express()
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

import userRouter from './routes/user.routes.js'
import authRouter from './routes/auth.routes.js'

app.use("/api/auth", authRouter)
app.use("/api/users", userRouter)


export {app}