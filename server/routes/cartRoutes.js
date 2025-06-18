const express = require("express");
const CartModel = require("./CartModel");
const router = express.Router();

router.route("/UpdateCart", async (req, res) => {
  try {
    const { userId, items } = req.body;

    if (!Array.isArray(items) || items.length === 0) {
      return res
        .status(400)
        .json({ message: "Items array is empty or not defined" });
    }

    const cart = new CartModel({ userId, items, TotalAmount });
    await cart.save();

    return res.status(200).json({ cart: cart });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});
