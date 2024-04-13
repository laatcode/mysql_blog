const pool = require('../../libs/mysql')

class PostStore {

    constructor() {
        this.table = 'posts'
    }

    find() {
        return pool.execute(`SELECTS * FROM ${this.table}`)
            .then(res => res[0])
    }
}

module.exports = PostStore