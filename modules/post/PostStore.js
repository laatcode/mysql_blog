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

    update(id, data) {
        return this.findOne(id)
            .then(found => {
                const postUpdated = {
                    ...found,
                    ...data
                }
                
                return pool.execute(`UPDATE ${this.table} SET title = ?, content = ? WHERE id = ?`, [postUpdated.title, postUpdated.content, id])
                    .then(() => this.findOne(id))
            })
    }
}

module.exports = PostStore