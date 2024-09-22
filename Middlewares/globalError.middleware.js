const { handleError } = require("../Utils/handlers.utils");


const globalErrorMiddleware = (err, req, res, next) => {
    const status = err.status ?? 500;
    const message = err.message ?? "Something Went Wrong"
    handleError(res,status,message,null);
}

module.exports = globalErrorMiddleware;