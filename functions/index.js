
const { onRequest } = require("firebase-functions/v2/https");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe");

// Initialize Express app
const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// Test route
app.get("/", (req, res) => res.status(200).send("Hello World"));

// Stripe payment route (Example)
app.post("/payments/create", async (req, res) => {
  const { total } = req.query; // Order total in cents
  console.log(`Payment request received for amount: ${total}`);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });

    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Export Firebase function
exports.api = onRequest(app);
