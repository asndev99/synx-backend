const { verifyAdmin } = require("../Middlewares/auth.middleware");
const itemsController = require("../Controllers/Categories/items.controller");
const upload = require("../Middlewares/multer.middleware");
const itemsRouter = require("express").Router();

itemsRouter.get("/:id", verifyAdmin, itemsController.getAllGame);
itemsRouter.post("/", verifyAdmin, upload.single("file"), itemsController.createGameInItem);



module.exports = itemsRouter;