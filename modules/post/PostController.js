const PostStore = require('./PostStore')
const { createPostSchema, updatePostSchema, getPostSchema } = require('./post.validationSchema')

class PostController {

    constructor() {
        this.store = new PostStore()
    }

    find() {
        return this.store.find()
    }

    findOne(id) {
        const { error } = getPostSchema.validate({ id }, { abortEarly: false })
        if(error) {
            throw error
        }
        return this.store.findOne(id)
    }

    create(data) {
        const { error } = createPostSchema.validate({ ...data }, { abortEarly: false })
        if(error) {
            throw error
        }
        return this.store.create(data)
    }

    update(id, data) {
        const { error } = getPostSchema.validate({ id }, { abortEarly: false })
        if(error) {
            throw error
        } else {
            const { error } = updatePostSchema.validate({ ...data }, { abortEarly: false })
            if(error) {
                throw error
            }
        }
        return this.store.update(id, data)
    }

    delete(id) {
        const { error } = getPostSchema.validate({ id }, { abortEarly: false })
        if(error) {
            throw error
        }
        return this.store.delete(id)
    }
}

module.exports = PostController