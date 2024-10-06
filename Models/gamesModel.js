const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imageUrls: [
      {
        type: String,
        required: true,
      },
    ],
    parentCategoryId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "ParentCategory",
    },
    listings:[
      {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Game"
      }
    ]
  },
  {
    timestamps: true,
  }
);

gameSchema.index({ name: 1, parentCategoryId: 1 }, { unique: true });

const Game = mongoose.model("Game", gameSchema);
module.exports = Game;
