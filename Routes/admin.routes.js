const adminRouter = require("express").Router();
const adminController = require("../Controllers/admin.controller");
const { verifyAdmin } = require("../Middlewares/auth.middleware");
const homeController = require("../Controllers/home.controller");
const accountController = require("../Controllers/Categories/accounts.controller");
const upload = require("../Middlewares/multer.middleware");

adminRouter.post("/login", adminController.login);
adminRouter.get("/home", verifyAdmin, homeController.homeCard)
adminRouter.post("/accounts/create-game", verifyAdmin, upload.single("file"), accountController.createGameInAccount);


module.exports = adminRouter;