const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserModal",
    required: true,
  },
  CartId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CartModal",
    required: true,
  },
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
