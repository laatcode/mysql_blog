const BaseStore = require('../core/BaseStore')
const CustomError = require('../../CustomError')

class UserStore extends BaseStore {

    constructor(tableName) {
        super(tableName)
    }

    find() {
        return this.pool.execute(`SELECT id, email, created_at, updated_at FROM ${this.table}`)
            .then(res => res[0])
    }

    findOne(id) {
        return this.pool.execute(`SELECT id, email, created_at, updated_at FROM ${this.table} WHERE id = ?`, [id])
            .then(res => {
                const found = res[0][0]
                if(found) {
                    return found
                } else {
                    throw new CustomError(404, 'Recurso no encontrado')
                }
            })
    }

    create(data) {
        return this.pool.execute(`INSERT INTO ${this.table} (email, password, created_at, updated_at) VALUES (?, ?, NOW(), NOW())`, [data.email, data.password])
            .then(res => this.findOne(res[0].insertId))
    }

    update(id, data) {
        return this.findOne(id)
            .then(found => {
                const userUpdated = {
                    ...found,
                    ...data
                }

                const query = data.password ? `UPDATE ${this.table} SET email = ?, password = ?, updated_at = NOW() WHERE id = ?` : `UPDATE ${this.table} SET email = ?, updated_at = NOW() WHERE id = ?`
                
                return this.pool.execute(query, data.password ? [userUpdated.email, userUpdated.password, id] : [userUpdated.email, id])
                    .then(() => this.findOne(id))
            })
    }

}

module.exports = UserStore