import jwt from "jsonwebtoken";
import User from "../models/user.model.js";


export const protecRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ message: "unauthrized _ No token Provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ message: "unauthrized _  invalid token" });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(401).json({ message: "user not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("Error in procetRoute Medilware", error.message);
    res.status(500).json({ message: "internal servaer error" });
  }
};
