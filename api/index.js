import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
dotenv.config();
mongoose
    .connect(process.env.MONGO)
    .then(() => console.log("MongoDb connect success"))
    .catch((error) => {
        console.log("mongoDb connect error: ", error);
    });

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("listening on port: 3000!!!");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// middleware
app.use((error, req, res, next) => {
    const statusCode = error.statusCode || 500;
    const message = error.message || "Internal Server Error";
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});
