import { v2 as cloudinary } from "cloudinary";
import { config } from "dotenv";

config();

cloudinary.config({
  cloud_name: process.env.Cloud_name,
  api_key: process.env.Cloud_API_KEY,
  api_secret: process.env.Cloud_SECRECT,
});

export default cloudinary