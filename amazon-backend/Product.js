const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new product
router.post("/", async (req, res) => {
  const { name, price, description, image } = req.body;

  try {
    const newProduct = await Product.create({ name, price, description, image });
    res.json(newProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

const Product = sequelize.define("Product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  image: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Product;