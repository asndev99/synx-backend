const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    deliveryTime: {
      type: String,
      required: true
    },
    gameId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Game"
    }
  },
  {
    timestamps: true,
  }
);

const listing = mongoose.model("Listing", listingSchema);
module.exports = listing;
