import express, { Request, Response } from "express";
import dotenv from 'dotenv';

import connectDB from "./config/database";


dotenv.config()

const app = express();
const PORT = process.env.PORT|| 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect to database 
connectDB

// Basic route
app.get("/", (req: Request, res: Response) => {
  res.json({
    success: true,
    message: "Hello, world! TODO App API Working Fine"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
