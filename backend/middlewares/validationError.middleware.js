const {ValidationError} = require('joi')

const validationError = (error, req, res, next) => {
    if(error instanceof ValidationError) {
        res.status(400).json({
            method: req.method,
            route: req.originalUrl,
            message: error.message
        })
    } else {
        next(error)
    }
}

module.exports = validationError