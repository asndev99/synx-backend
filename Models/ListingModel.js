const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    Price: {
      type: Number,
      required: true,
    },
    decription: {
      type: String,
      required: true,
    },
    deliveryTime: {
      type: String,
      required: true

    }
  },
  {
    timestamps: true,
  }
);

const listing = mongoose.model("Listing", listingSchema);
module.exports = listing;
