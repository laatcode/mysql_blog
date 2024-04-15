const pool = require('../../libs/mysql')

class PostStore {

    constructor() {
        this.table = 'posts'
    }

    find() {
        return pool.execute(`SELECT * FROM ${this.table}`)
            .then(res => res[0])
    }

    findOne(id) {
        return pool.execute(`SELECT * FROM ${this.table} WHERE id = ?`, [id])
            .then(res => res[0][0])
    }
}

module.exports = PostStore