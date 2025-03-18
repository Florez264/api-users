import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import userRoutes from "./routers/user.routes";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/usuarios", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${process.env.PORT}`);
});
