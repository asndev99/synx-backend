const jwt = require("jsonwebtoken");
const { UnauthorizedError } = require("../customErrors");
const { ACCESS_SECRET } = require("../Configs/config");
const User = require("../Models/userModel");

const verifyAdmin = async (req, res, next) => {
    try {

        if (!req.headers.authorization?.startsWith("Bearer")) {
            throw new UnauthorizedError("Missing Authorization header with Bearer token")
        }

        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            throw new UnauthorizedError("Please Login To Continue");
        }
        const decoded = jwt.verify(token, ACCESS_SECRET);
        const { id, role } = decoded;
        const user = await User.findOne({ _id: id, role })
        if (!user) {
            throw new UnauthorizedError("Please Login To Continue");
        }
        req.user = user;
        next();
    }
    catch (error) {
        if (error instanceof jwt.JsonWebTokenError) {
            throw new UnauthorizedError("Please Login To Continue");
        }
        else {
            console.log("error in verifying token", error);
            next(error);
        }
    }
}

const generateToken = (payload) => {
    try {
        return jwt.sign(payload, ACCESS_SECRET);
    }
    catch (error) {
        console.log("Error generating token", error);
        next(error);
    }
}

module.exports = {
    verifyAdmin,
    generateToken
}