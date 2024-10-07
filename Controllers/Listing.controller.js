const { BadRequestError } = require("../customErrors");
const Game = require("../Models/gamesModel");
const listing = require("../Models/ListingModel");
const parentCategory = require("../Models/parentCategoryModel");
const { okResponse, handleError } = require("../Utils/handlers.utils");

const addListing = async (req, res, next) => {
  try {
    const { title, description, price, deliveryTime, gameId, parentCategoryId } = req.body;

    let newListing = await listing.create({
      title,
      price,
      description,
      deliveryTime,
      gameId
    });

    const newlisting = await newListing.save();
    await Game.findByIdAndUpdate(gameId, { $push: { listings: newlisting._id } });
    await parentCategory.findByIdAndUpdate(parentCategoryId, { $push: { listings: newlisting._id } });
    okResponse(res, 200, newListing, "listing  Added Successfull");
  } catch (error) {
    if (error.code == 11000) {
      const newError = new BadRequestError(
        "List With this name already exists"
      );
      return next(newError);
    }
    next(error);
  }
};

const getAllListing = async (req, res, next) => {
  try {
    const Listing = await listing.find({}).populate({ path: "gameId", populate: { path: "parentCategoryId", model: "ParentCategory" } });
    okResponse(res, 200, Listing, "All List Fetched");
  } catch (error) {
    console.log(error);
    next(error);
  }
};


//FOR DROPDOWN

const getAllCategories = async (req, res, next) => {
  try {
    const categories = await parentCategory.find({}).populate({
      path: "games",
      populate: {
        path: "listings",
        model: "Listing"
      }
    }); okResponse(res, 200, categories, "");
  }
  catch (error) {
    console.log("Error in fetching all Categories");
    next(error);
  }
}


const deleteList=async(req,res,next)=>{
  try {
    const id=req.params.id
    let deletelist=await listing.findByIdAndDelete(id)
    if(!deletelist){
      handleError(res,400,null,"Id is not Found")
  }
  okResponse(res, 200, deletelist, "")
  } catch (error) {
    console.log("Error in delete list");
    next(error)
  }
}

module.exports = { addListing, getAllListing, getAllCategories ,deleteList};
