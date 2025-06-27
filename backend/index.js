import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from "cookie-parser";

import todoRoute from "../backend/routes/todo.route.js";
import userRoute from "../backend/routes/user.route.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT;
const DB_URI = process.env.MONGODB_URI;

//middlewares
app.use(express.json());
app.use(cookieParser()); 
app.use(cors({
  origin:process.env.FRONTEND_URL,
  credentials:true,
  methods:"GET,POST,PUT,DELETE",
  allowedHeaders:["Content-Type","Authorization"]   //add other headers you want to allow here.   
}))

// Database Connection Code
try{
    await mongoose.connect(DB_URI)
    console.log("connected to mongoDb");
}catch(error){
    console.log(error);
}

// Routes
app.use("/todo",todoRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})