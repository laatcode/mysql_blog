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

    create(data) {
        return this.store.create(data)
    }

    update(id, data) {
        return this.store.update(id, data)
    }

    delete(id) {
        return this.store.delete(id)
    }
}

module.exports = PostController