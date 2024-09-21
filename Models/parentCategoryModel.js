const mongoose = require("mongoose");

const parentCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
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
