import dotenv from "dotenv";
dotenv.config(); // ✅ Load environment variables first

import express from "express";
import authRouter from "./routers/auth.route.js";
import messageRouter from "./routers/message.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cookieParser());

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

// Routes
app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);

app.get("/", (req, res) => {
  res.send("Hello Hridoy!");
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
  connectDB();
});
