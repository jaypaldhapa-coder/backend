import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import router from './Routes/userRoutes.js';
const app = express();

app.use(express.json());

console.log("USER:", process.env.EMAIL_USER);
console.log("PASS:", process.env.EMAIL_PASS);


//Router
app.get("/", (req, res) => {
    res.status(200).json({
      success: true,
      message: "Hello from server",
    });
  });
  
  // Use Router Correctly
  app.use("/api", router);

app.listen(3000,()=>{
    console.log("Server running on 3000")
});