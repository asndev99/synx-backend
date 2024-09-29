const { verifyAdmin } = require("../Middlewares/auth.middleware")
const gameCategory=require("../Controllers/gameCategory")
const gameCategoryRouter=require("express").Router()

gameCategoryRouter.post("/",verifyAdmin,gameCategory.addGameCategory)


module.exports={gameCategoryRouter}