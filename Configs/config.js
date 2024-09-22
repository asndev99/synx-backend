const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});

module.exports = {
  PORT: process.env.PORT,
  MONGO_URI:process.env.MONGO_URI,
  ACCESS_SECRET:process.env.ACCESS_SECRET
};
