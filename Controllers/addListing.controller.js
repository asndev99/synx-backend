const { BadRequestError } = require("../customErrors");
const listing = require("../Models/ListingModel");
const { okResponse } = require("../Utils/handlers.utils");

const addListing = async (req, res, next) => {
  try {
    const { title, description, price, deliveryTime } = req.body;

    let newListing = await listing.create({
      title,
      price,
      description,
      deliveryTime,
    });
    await newListing.save();
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
    const Listing = await listing.find({});
    okResponse(res, 200, Listing, "All List Fetched");
  } catch (error) {
    next(error);
  }
};

module.exports = { addListing, getAllListing };
