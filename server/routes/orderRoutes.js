const express = require("express");
const FoodModel = require("../model/FoodModel");
const OrderModel = require("../model/OrderModel");
const router = express.Router();

router.route("/").post(async (req, res) => {
  try {
    const { UserId, CartId } = req.body;

    if (!UserId || !CartId) {
      return res
        .status(400)
        .json({ message: "UserId or CartId is not available" });
    }

    const order = await OrderModel.create({
      UserId: UserId,
      CartId: CartId,
    });

    return res.status(200).json({ message: "order created", order: order });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});
