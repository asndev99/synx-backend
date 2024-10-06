const { verifyAdmin } = require("../Middlewares/auth.middleware");
const accountController = require("../Controllers/Categories/accounts.controller");
const upload = require("../Middlewares/multer.middleware");

const accountRouter = require("express").Router();


accountRouter.get("/:id", verifyAdmin, accountController.getAllGame)
accountRouter.post("/", verifyAdmin, upload.single('file'), accountController.createGameInAccount)


module.exports = accountRouter;