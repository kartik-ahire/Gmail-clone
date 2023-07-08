import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
  // const DB_URI = `mongodb://localhost:27017/gmailclone`;
  // const DB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-67fanek-shard-00-00.cjxcjqe.mongodb.net:27017,ac-67fanek-shard-00-01.cjxcjqe.mongodb.net:27017,ac-67fanek-shard-00-02.cjxcjqe.mongodb.net:27017/?ssl=true&replicaSet=atlas-vtbkw7-shard-0&authSource=admin&retryWrites=true&w=majority`;
  const DB_URI =  `mongodb://${USERNAME}:${PASSWORD}@ac-67fanek-shard-00-00.cjxcjqe.mongodb.net:27017,ac-67fanek-shard-00-01.cjxcjqe.mongodb.net:27017,ac-67fanek-shard-00-02.cjxcjqe.mongodb.net:27017/?ssl=true&replicaSet=atlas-vtbkw7-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    mongoose.connect(DB_URI, { useNewUrlParser: true });
    mongoose.set("strictQuery", true);
    console.log("Database connected sucessfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error.message);
  }
};

export default Connection;
