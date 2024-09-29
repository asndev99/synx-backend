const { handleError } = require("../Utils/handlers.utils");
const adminRouter = require("./admin.routes");
const parentCategoryRouter = require("./parentCategory.routes");
const rootRouter = require("express").Router();


rootRouter.use("/parent-category", parentCategoryRouter);
rootRouter.use("/admin", adminRouter);
rootRouter.all("*", (req, res, next) => {
    handleError(res, 404, null, "Route Not Found");
});

module.exports = rootRouter;
