const mongoose = require("mongoose");

const parentCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    games: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Game"
      }
    ],
    listings:
      [
        {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Listing"
        }
      ],
  },
  {
    timestamps: true,
  }
);

const parentCategory = mongoose.model(
  "ParentCategory",
  parentCategorySchema
);

module.exports = parentCategory;
