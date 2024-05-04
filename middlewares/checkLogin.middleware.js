const jwt = require('jsonwebtoken')
const CustomError = require("../CustomError")

const checkLogin = (req, res, next) => {
    if(req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1]
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.userId = decoded.id
        } catch (error) {
            if(error instanceof jwt.TokenExpiredError) {
                throw new CustomError(401, "El token ha expirado")
            }
        }
    } else {
        throw new CustomError(401, "Es necesario iniciar sesión")
    }
    next()
}

module.exports = checkLogin