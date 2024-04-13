const PostStore = require('./PostStore')

class PostController {

    constructor() {
        this.store = new PostStore()
    }

    find() {
        return this.store.find()
    }
}

module.exports = PostController