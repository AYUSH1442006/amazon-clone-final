const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const sequelize = require("./config/database");

// Load environment variables
dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Test Database Connection
sequelize.authenticate()
  .then(() => console.log("✅ Database Connected"))
  .catch(err => console.error("❌ Database Connection Error:", err));

// Sync Database (Creates tables if they don’t exist)
sequelize.sync()
  .then(() => console.log("✅ Database Synced"))
  .catch(err => console.error("❌ Database Sync Error:", err));

// Test API
app.get("/", (req, res) => {
  res.send("Amazon Clone Backend is running on Port 3000!");
});

// Import Routes
try {
  const authRoutes = require("./routes/auth");
  const productRoutes = require("./routes/product");
  const paymentRoutes = require("./routes/payment");

  app.use("/api/auth", authRoutes);
  app.use("/api/products", productRoutes);
  app.use("/api/payment", paymentRoutes);
} catch (err) {
  console.error("❌ Error loading routes:", err);
}

// Start Server on Port 3000
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
