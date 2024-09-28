const parentCategory=require("../Models/parentCategoryModel");
const {verifyAdmin }=require("../Middlewares/auth.middleware");
const globalErrorMiddleware = require("../Middlewares/globalError.middleware");
const { BadRequestError } = require("../customErrors");
const { okResponse, handleError } = require("../Utils/handlers.utils");
const  Game =require("../Models/gamesModel")
const addCategory=async(req,res)=>{
    try {
        const { name}=req.body;
        let category=await parentCategory.findOne({name})
        if(category)  throw new BadRequestError("category name is already present") 
        category=new category({
            name
        })
        return okResponse(200,'parentCategory is created')
    } catch (error) {
         handleError(500,"parent category catch error")
    }
}


// const addgamecaateegory=async(req,res)=>{
//     try {
//         const {name,imageUrl,parentCategoryId}=req.body
         
//     } catch (error) {
        
//     }
// }


module.exports={
    addCategory
}