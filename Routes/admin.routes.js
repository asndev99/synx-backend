const adminRouter = require("express").Router();
const adminController = require("../Controllers/admin.controller");

adminRouter.post("/login",adminController.login);



module.exports = adminRouter;