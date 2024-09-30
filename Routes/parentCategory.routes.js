const ParentCategoryController = require("../Controllers/parentCategory.controller");
const { verifyAdmin } = require("../Middlewares/auth.middleware");

const parentCategoryRouter = require("express").Router();

parentCategoryRouter.post("/", verifyAdmin, ParentCategoryController.addCategory)
parentCategoryRouter.get("/", verifyAdmin, ParentCategoryController.getAllParentCategoriesWithGamesCount)
parentCategoryRouter.get("/all-categories", verifyAdmin, ParentCategoryController.getAllCategories)


module.exports = parentCategoryRouter;