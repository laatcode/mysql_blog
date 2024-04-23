const pool = require('../../libs/mysql')
const CustomError = require('../../CustomError')

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
            .then(res => {
                const found = res[0][0]
                if(found) {
                    return found
                } else {
                    throw new CustomError(404, 'Post no encontrado')
                }
            })
    }

    create(data) {
        return pool.execute(`INSERT INTO ${this.table} (title, content, created_at, updated_at) VALUES (?, ?, NOW(), NOW())`, [data.title, data.content])
            .then(res => this.findOne(res[0].insertId))
    }

    update(id, data) {
        return this.findOne(id)
            .then(found => {
                const postUpdated = {
                    ...found,
                    ...data
                }
                
                return pool.execute(`UPDATE ${this.table} SET title = ?, content = ?, updated_at = NOW() WHERE id = ?`, [postUpdated.title, postUpdated.content, id])
                    .then(() => this.findOne(id))
            })
    }

    delete(id) {
        return this.findOne(id)
            .then(() => pool.execute(`DELETE FROM ${this.table} WHERE ID = ?`, [id]))
            .then(() => `Post con id ${id} eliminado con éxito`)
    }
}

module.exports = PostStore