import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { createServer } from "node:http";
import connectToSocket from "./controllers/socket.manager.js";
import router from "./routes/users.routes.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.use(cors());
app.set("port", process.env.PORT || 8080);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

const start = async () => {
  try {
    const connectDB = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to DB: ${connectDB.connection.host}`);
  } catch (err) {
    console.log("Error", err);
  }

  server.listen(app.get("port"), () => {
    console.log(`Server is listening from port: ${app.get("port")}`);
  });
};

start();
