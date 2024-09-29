const Game=require("../Models/gamesModel")
const parentCategory=require("../Models/gamesModel");
const { handleError,okResponse } = require("../Utils/handlers.utils");


const addGameCategory=async(req,res,next)=>{
    try {
        const { name, imageUrl, parentCategoryId}=req.body;
        const CheckParenCategoriesId=await parentCategory.findById(parentCategoryId);
        if(!CheckParenCategoriesId){
            handleError(res,400,null,"parent Category is not found")
        }
        const newGame=new Game({
            name,
            imageUrl,
            parentCategoryId:CheckParenCategoriesId._id
        })
        await newGame.save()
        okResponse(res, 200, newGame, 'Game Category Added Successfull');
    } catch (error) {
        next(error);
    }
}

module.exports={addGameCategory}

