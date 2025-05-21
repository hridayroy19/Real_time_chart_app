import express, { text } from "express";
import dotenv from "dotenv";
import authRouter from "./routers/auth.route.js";
import messageRouter from "./routers/message.route.js";
import { connectDB } from "./lib/db.js";
import cookiePerser from "cookie-parser";
import cors from"cors"
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cookiePerser());
app.use(cors({origin:"http://localhost:5173" , credentials:true}))

dotenv.config();

// Add a slash at the beginning of the route path
app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);

app.get("/", (req, res) => {
  res.send("Hello Hridoy!");
});
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
  connectDB();
});
