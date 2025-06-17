const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  FoodId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FoodModal",
      required: true,
    },
  ],
  OrderStatus: {
    type: String,
    enum: ["active", "inactive", "cancelled", "completed"],
    default: "active", // optional default value
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("OrderModal", orderSchema);
