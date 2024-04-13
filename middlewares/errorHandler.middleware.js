errorHandler = (error, req, res, next) => {
    console.error(error)

    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode).json({
        method: req.method,
        route: req.originalUrl,
        message: error.message
    })
}

module.exports = errorHandler