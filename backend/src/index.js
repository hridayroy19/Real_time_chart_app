import express from "express";
import dotenv from "dotenv";
import authRouter from "./routers/auth.route.js";
import messageRouter from "./routers/message.route.js";
import { connectDB } from "./lib/db.js";
import cookiePerser from "cookie-parser";
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cookiePerser());

dotenv.config();

// Add a slash at the beginning of the route path
app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);


app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
  connectDB();
});
