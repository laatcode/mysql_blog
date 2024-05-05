class CustomError {

    constructor(statusCode, message) {
        this.customError = true
        this.statusCode = statusCode
        this.message = message
    }

}

module.exports = CustomError