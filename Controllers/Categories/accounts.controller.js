const Game = require("../../Models/gamesModel");
const cloudinary = require("../../Configs/cloudinary");
const { handleError, okResponse } = require("../../Utils/handlers.utils");
const { BadRequestError } = require("../../customErrors");

const createGameInAccount = async (req, res, next) => {
  try {
    if (!req.file) {
      handleError(res, 400, null, "No File Selected");
    }

    const uploadedImage = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: "games" }, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        })
        .end(req.file.buffer);
    });

    const game = new Game({
      name: req.body.name,
      imageUrls: [uploadedImage.secure_url],
      parentCategoryId: req.body.parentCategoryId,
    });

    await game.save();

    res.status(201).json({ message: "Game created successfully", game });
  } catch (error) {
    if (error.code === 11000) {
      handleError(res, 400, null, "This Game Already Exists in this Category");
    } else {
      next(error);
    }
  }
};

const getAllGame = async (req, res, next) => {
  try {
    const game = await Game.find({});
    okResponse(res, 200, game, "All games fetch Successsfully");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createGameInAccount,
  getAllGame,
};
