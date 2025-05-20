import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/mongoDB.config.js";
import connectCloudinary from "./config/cloudinary.config.js";
import adminRouter from "./routes/admin.route.js";

dotenv.config();

// app config
const app = express();
const port = process.env.PORT;
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());



// end point
app.use("/api/admin", adminRouter);
app.get("/",(req , res)=>{
  res.send("Hello World!!");
})

app.listen(port,()=> {
  console.log(`Server is running on http://localhost:${port}`);
  connectDb();
})