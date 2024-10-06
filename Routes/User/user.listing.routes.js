const userListingRouter = require("express").Router();
const userListingController = require("../../Controllers/Users/user.listing.controller");

userListingRouter.get("/:id",userListingController.getListingsWithGamesByCategoryId)

module.exports = userListingRouter;