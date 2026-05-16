import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import customerRoutes from "./routes/customerRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/customers", customerRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.send("Server Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});