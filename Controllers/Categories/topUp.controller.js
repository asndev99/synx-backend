const Game = require("../../Models/gamesModel");
const { handleError, okResponse } = require("../../Utils/handlers.utils");
const cloudinary = require("../../Configs/cloudinary");
const parentCategory = require("../../Models/parentCategoryModel");

const createGameInTopUp = async (req, res, next) => {
    try {
        if (!req.file) {
            handleError(res, 400, null, "No file Selected")
        }
        const uploadedImage = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream({ folder: "games" }, (error, result) => {
                if (error) reject(error)
                else resolve(result)
            }).end(req.file.buffer)
        })
        const game = new Game({
            name: req.body.name,
            imageUrls: [uploadedImage.secure_url],
            parentCategoryId: req.body.parentCategoryId
        })
        await game.save()
        await parentCategory.findByIdAndUpdate(
            req.body.parentCategoryId,
            { $push: { games: game._id } }
        );
        res.status(201).json({ message: 'Game created successfully', game });
    } catch (error) {
        if (error.code === 11000) {
            handleError(res, 400, null, "This Game Already Exists in this Category")
        }
        else {
            next(error);
        }
    }
}

const getAllGame = async (req, res, next) => {
    try {
        const { id } = req.params;
        const game = await Game.find({ parentCategoryId: id });
        okResponse(res, 200, game, "All games fetch Successsfully");
    } catch (error) {
        console.log(error);
        next(error);
    }
};




module.exports = { createGameInTopUp, getAllGame }