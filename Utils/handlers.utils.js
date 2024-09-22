module.exports = {
    okResponse: (res, status, data, message) => {
        let response = {
            success: true,
            message,
            code,
            data
        }
        return res.status(response.status).code(response);
    },
    handleError: (res, status, data, message) => {
        let response = {
            success: false,
            message,
            status,
            data
        }
        return res.status(response.status).json(response);
    }
}