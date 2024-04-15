const PostStore = require('./PostStore')

class PostController {

    constructor() {
        this.store = new PostStore()
    }

    find() {
        return this.store.find()
    }

    findOne(id) {
        return this.store.findOne(id)
    }
}

module.exports = PostController