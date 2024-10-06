const { verifyAdmin } = require("../Middlewares/auth.middleware");
const topUpController = require("../Controllers/Categories/topUp.controller");
const upload = require("../Middlewares/multer.middleware");

const topUpRouter = require("express").Router();


topUpRouter.get("/:id", verifyAdmin, topUpController.getAllGame);
topUpRouter.post("/", verifyAdmin, upload.single("file"), topUpController.createGameInTopUp)

module.exports = topUpRouter;