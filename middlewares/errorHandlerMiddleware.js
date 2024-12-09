export const errorHandlerMiddleware = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode

    res.statusCode = statusCode;

    res.json({
        message: err.message,
        stack: err.stack
    })

    next();
}