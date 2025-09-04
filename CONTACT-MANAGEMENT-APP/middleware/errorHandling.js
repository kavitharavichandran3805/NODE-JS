const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.status(statusCode).json({
                message: err.message,
                stack: err.stack
            });
            break;

        case constants.NOT_FOUND:
            res.status(statusCode).json({
                message: err.message,
                stack: err.stack
            });
            break;

        case constants.UNAUTHORIZED:
            res.status(statusCode).json({
                message: err.message,
                stack: err.stack
            });
            break;

        case constants.FORBIDDEN:
            res.status(statusCode).json({
                message: err.message,
                stack: err.stack
            });
            break;

        case constants.SERVER_ERROR:
            res.status(statusCode).json({
                message: err.message,
                stack: err.stack
            });
            break;

        default:
            res.status(500).json({
                message: "Something went wrong",
                stack: err.stack
            });
            break;
    }
};

module.exports = errorHandler;
