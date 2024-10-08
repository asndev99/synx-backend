const { verifyAdmin } = require("../Middlewares/auth.middleware");
const listingControlller = require("../Controllers/Listing.controller");
const listingRouter = require("express").Router();


listingRouter.get("/all-categories",verifyAdmin,listingControlller.getAllCategories),
listingRouter.post("/create-list",verifyAdmin,listingControlller.addListing)
listingRouter.delete('/delete-list/:id',verifyAdmin,listingControlller.deleteList)

module.exports = listingRouter;