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

    create(data) {
        return pool.execute(`INSERT INTO ${this.table} (title, content) VALUES (?, ?)`, [data.title, data.content])
            .then(res => this.findOne(res[0].insertId))
    }
}

module.exports = PostStore