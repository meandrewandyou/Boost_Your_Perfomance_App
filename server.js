import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

const { PORT, DB_CONNECTION_PATH } = process.env;
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use("/user/", userRoute);

const start = async () => {
  try {
    await mongoose.connect(DB_CONNECTION_PATH, {
      dbName: "Goals",
    });
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (err) {
    console.log(err.message);
  }
};

start();
