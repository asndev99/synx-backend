const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});

module.exports = {
  PORT: process.env.PORT || 8000,
  MONGO_URI: process.env.MONGO_URI,
  ACCESS_SECRET: process.env.ACCESS_SECRET,
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET
};
