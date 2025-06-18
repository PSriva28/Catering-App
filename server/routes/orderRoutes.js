const express = require("express");
const FoodModel = require("../model/FoodModel");
const router = express.Router();

router.route("/").post(async (req, res) => {
  try {
    const { FoodIds } = req.body;
    let TotalOrderPrice;

    for (let i = 0; i < FoodIds.length; i++) {
      const food = await FoodModel.findById(FoodIds[i]).populate();
      if (!food) {
        return res.status(400).json({ message: "Food not found, Please remove the food which is not available" });
      }
      TotalOrderPrice += food.price;
    }
    if (!food) {
      return res;
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});
