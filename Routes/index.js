const { handleError } = require("../Utils/handlers.utils");
const adminRouter = require("./admin.routes");
const { gameCategoryRouter } = require("./gameCategory.routes");
const parentCategoryRouter = require("./parentCategory.routes");
const userListingRouter = require("./User/user.listing.routes");
const rootRouter = require("express").Router();


rootRouter.use("/parent-category", parentCategoryRouter);
rootRouter.use("/admin", adminRouter);
rootRouter.use("/game",gameCategoryRouter);
rootRouter.use("/user-listing",userListingRouter);
rootRouter.all("*", (req, res, next) => {
    handleError(res, 404, null, "Route Not Found");
});

module.exports = rootRouter;
