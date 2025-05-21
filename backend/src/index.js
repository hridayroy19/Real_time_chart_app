import express from "express";
import dotenv from "dotenv";
import authRouter from "./routers/auth.route.js";
import { connectDB } from "./lib/db.js";
import cookiePerser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookiePerser());

dotenv.config();

// Add a slash at the beginning of the route path
app.use("/api/auth", authRouter);
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
  connectDB();
});
