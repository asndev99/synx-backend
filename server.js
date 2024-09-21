const server = require("./app");
const { PORT } = require("./Configs/config");
server.listen(PORT, () => {
  console.log("server is running", PORT);
});
