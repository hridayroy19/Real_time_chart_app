import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_CONNACTION);
    console.log(`Mongodb connceted:${conn.connection.host}`);
  } catch (error) {
    console.log(`MongoDb connection Error:`, error);
  }
};
