const resourceNotFound = (error, req, res, next) => {
    if(error.customError && error.statusCode === 404) {
        res.status(404).json({
            method: req.method,
            route: req.originalUrl,
            message: error.message
        })
    } else {
        next(error)
    }

}

module.exports = resourceNotFound