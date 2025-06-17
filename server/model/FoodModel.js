const mongoose = require("mongoose");
const foodSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    type: {
      type: String,
      required: true,
      enum: [
        "Starters",
        "Snacks",
        "Main Course",
        "Beverages",
        "Meal",
        "Dessert",
        "MRP Items",
      ],
    },
    calories: { type: Number, required: true },
    description: { type: String, required: true },
    isVeg: { type: Boolean, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    available: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

//   stallId: ObjectId, // Reference to Stall
module.exports = mongoose.model("FoodModel", foodSchema);
