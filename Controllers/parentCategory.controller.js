const parentCategory = require("../Models/parentCategoryModel");
const { BadRequestError } = require("../customErrors");
const { okResponse } = require("../Utils/handlers.utils");
const addCategory = async (req, res, next) => {
    try {
        const { name } = req.body;
        let newParentcategory = new parentCategory({
            name
        })
        await newParentcategory.save();
        okResponse(res, 200, newParentcategory, 'Parent Category Added Successfull');
    } catch (error) {
        if (error.code == 11000) {
            const newError = new BadRequestError("Parent Category With this name already exists");
            return next(newError);
        }
        next(error);
    }
}

const getAllParentCategories = async (req, res, next) => {
    try {
        const categories = await parentCategory.find();
        okResponse(res, 200, categories, "All Parent Categories Fetched");
    }
    catch (error) {
        next(error);
    }
}



module.exports = {
    addCategory,
    getAllParentCategories
}