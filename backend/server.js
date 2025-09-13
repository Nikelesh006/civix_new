import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js"; // add this

dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173", // updated for Vite
    credentials: true,
  })
);
app.use(express.json());

// Root route for health check
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes); // add this

// MongoDB Connection
if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI not set in environment variables");
  process.exit(1);
}
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(process.env.PORT || 5000, () =>
      console.log(`🚀 Server running on port ${process.env.PORT || 5000}`)
    );
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Make sure your frontend fetches from http://localhost:5000/api/auth or your deployed backend URL.
