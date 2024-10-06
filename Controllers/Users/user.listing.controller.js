const { BadRequestError } = require("../../customErrors");
const listing = require("../../Models/ListingModel");
const parentCategory = require("../../Models/parentCategoryModel");
const { okResponse } = require("../../Utils/handlers.utils");


const getListingsWithGamesByCategoryId = async (req, res, next) => {
    try {
        const { id } = req.params;
        const category = await parentCategory.findById(id).populate("games");

        if (!category) {
            throw new BadRequestError("Category Not Found");
        }
        console.log(category);

        const gameIds = category.games.map(game => game._id);

        const listings = await listing.find({ gameId: { $in: gameIds } }).populate("gameId");
        okResponse(res, 200, listings, "");
    } catch (error) {
        console.log("Error in getListingsWithGamesByCategoryId:", error);
        next(error);
    }
};

module.exports = { getListingsWithGamesByCategoryId };
