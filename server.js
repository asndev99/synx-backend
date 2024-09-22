const server = require("./app");
const { PORT } = require("./Configs/config");
const connectDB = require("./Configs/db");

connectDB();

server.listen(PORT, () => {
  console.log("server is running", PORT);
});
