const BaseStore = require('../core/BaseStore')

class PostStore extends BaseStore {

    constructor(tableName) {
        super(tableName)
    }

    create(data) {
        return this.pool.execute(`INSERT INTO ${this.table} (title, content, created_by, created_at, updated_by, updated_at) VALUES (?, ?, ?, NOW(), ?, NOW())`, [data.title, data.content, data.userId, data.userId])
            .then(res => this.findOne(res[0].insertId))
    }

    update(id, data) {
        return this.findOne(id)
            .then(found => {
                const postUpdated = {
                    ...found,
                    ...data
                }
                
                return this.pool.execute(`UPDATE ${this.table} SET title = ?, content = ?, updated_by = ?, updated_at = NOW() WHERE id = ?`, [postUpdated.title, postUpdated.content, postUpdated.userId, id])
                    .then(() => this.findOne(id))
            })
    }
}

module.exports = PostStore