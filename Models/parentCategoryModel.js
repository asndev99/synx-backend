const mongoose = require("mongoose");

const parentCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    games:[
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

const parentCategoryModel = mongoose.model(
  "ParentCategory",
  parentCategorySchema
);

module.exports = parentCategoryModel;
