const adminRouter = require("express").Router();
const adminController = require("../Controllers/admin.controller");
const { verifyAdmin } = require("../Middlewares/auth.middleware");
const homeController = require("../Controllers/home.controller");
const accountController = require("../Controllers/Categories/accounts.controller");
const upload = require("../Middlewares/multer.middleware");
const  {addListing,getAllListing}=require("../Controllers/addListing.controller");
const { createGameInItem } = require("../Controllers/Categories/items.controller");
const { createGameInTopUp } = require("../Controllers/Categories/topUp.controller");

adminRouter.post("/login", adminController.login);
adminRouter.get("/home", verifyAdmin, homeController.homeCard)
adminRouter.post("/accounts/create-game", verifyAdmin, upload.single("file"), accountController.createGameInAccount);
adminRouter.post("/item/create-game",verifyAdmin,upload.single('file'),createGameInItem)
adminRouter.post("/topup/create-game",verifyAdmin,upload.single('file'),createGameInTopUp)
adminRouter.post("/create-list" ,verifyAdmin,addListing)
adminRouter.get("/get-list",verifyAdmin,getAllListing)
adminRouter.get("/get-games",verifyAdmin,accountController.getAllGame)

module.exports = adminRouter;