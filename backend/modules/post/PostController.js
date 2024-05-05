const BaseController = require('../core/BaseController')

class PostController extends BaseController {

    constructor(Store, tableName) {
        super(Store, tableName)
    }
}

module.exports = PostController