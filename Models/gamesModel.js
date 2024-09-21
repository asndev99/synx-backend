const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    parentCategoryId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "ParentCategory",
    },
  },
  {
    timestamps: true,
  }
);

const gameModel = mongoose.model("Game", gameSchema);
module.exports = gameModel;
