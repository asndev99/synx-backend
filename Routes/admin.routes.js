const adminRouter = require("express").Router();
const adminController = require("../Controllers/admin.controller");
const { verifyAdmin } = require("../Middlewares/auth.middleware");
const homeController = require("../Controllers/home.controller");
const { addListing, getAllListing } = require("../Controllers/Listing.controller");
const accountRouter = require("./accounts.routes");
const topUpRouter = require("./topup.routes");
const itemsRouter = require("./items.router");
const listingRouter = require("./listing.router");

adminRouter.use("/accounts", accountRouter);
adminRouter.use("/topup", topUpRouter);
adminRouter.use("/items", itemsRouter);
adminRouter.use("/listing",listingRouter);
adminRouter.post("/login", adminController.login);
adminRouter.get("/home", verifyAdmin, homeController.homeCard)
adminRouter.post("/create-list", verifyAdmin, addListing)
adminRouter.get("/get-list", verifyAdmin, getAllListing)

module.exports = adminRouter;