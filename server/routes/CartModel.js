const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserModal",
      required: true,
    },

    items: [
      {
        FoodId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "FoodModal",
          required: true,
        },
        quantity: {
          type: String,
          default: 1,
          min: 1,
        },
      },
    ],
    TotalAmount: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CartModel", cartSchema);
