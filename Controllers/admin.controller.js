const { BadRequestError, UnauthorizedError } = require("../customErrors");
const bcrypt = require("bcryptjs");
const User = require("../Models/userModel");
const { generateToken } = require("../Middlewares/auth.middleware");
const { okResponse } = require("../Utils/handlers.utils");

const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username});
        
        if (!user) {
            throw new BadRequestError("Username or email is incorrect");
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            throw new UnauthorizedError("Email or Password is incorrect");
        }
        const accesstoken = generateToken({ id: user._id, role: "ADMIN" });
        okResponse(res, 200, user, "Successfully logged in", accesstoken);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = {
    login
}