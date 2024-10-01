const Game = require("../Models/gamesModel");
const listing = require("../Models/ListingModel");
const parentCategory = require("../Models/parentCategoryModel");
const User = require("../Models/userModel");
const { okResponse } = require("../Utils/handlers.utils");

const homeCard = async (req, res, next) => {
    try {
        const [totalGames, totalListing, totalCategories, totalUsers] = await Promise.all([
            Game.countDocuments(),
            listing.countDocuments(),
            parentCategory.countDocuments(),
            User.countDocuments({ role: "USER" })
        ])

        okResponse(res, 200, { totalGames, totalListing, totalCategories, totalUsers }, "Home Data Fetched");
    }
    catch (error) {
        console.log("Error in home card api", error);
        next(error)
    }
}

module.exports = {
    homeCard
}