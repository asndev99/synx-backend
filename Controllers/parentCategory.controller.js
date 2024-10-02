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

const getAllParentCategoriesWithGamesCount = async (req, res, next) => {
    try {
        const categories = await parentCategory.aggregate([
            {
                $lookup: {
                    from: "games",
                    localField: "games",
                    foreignField: "_id",
                    as: "gamesInfo"
                }
            },
            {
                $addFields: {
                    gamesCount: { $size: "$gamesInfo" }
                }
            },
            {
                $project: {
                    name: 1,
                    gamesCount: 1
                }
            }
        ]);

        okResponse(res, 200, categories, "All Parent Categories with Game Count Fetched");
    } catch (error) {
        next(error);
    }
};

const getAllCategories = async(req,res,next) => {
    try{
        const categories =await parentCategory.find({});
        okResponse(res,200,categories,"All Categories Fetched");
     }
     catch(error){
        next(error);
     }
}




module.exports = {
    addCategory,
    getAllCategories,
    getAllParentCategoriesWithGamesCount
}