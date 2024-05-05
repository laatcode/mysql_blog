const BaseStore = require('../core/BaseStore')
const CustomError = require('../../CustomError')

class UserStore extends BaseStore {

    constructor(tableName) {
        super(tableName)
    }

    find() {
        return this.pool.execute(`SELECT id, firstname, lastname, email, created_at, updated_at FROM ${this.table}`)
            .then(res => res[0])
    }

    findOne(id) {
        return this.pool.execute(`SELECT id, firstname, lastname, email, created_at, updated_at FROM ${this.table} WHERE id = ?`, [id])
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
        return this.pool.execute(`INSERT INTO ${this.table} (firstname, lastname, email, password, created_at, updated_at) VALUES (?, ?, ?, ?, NOW(), NOW())`, [data.firstname, data.lastname, data.email, data.password])
            .then(res => this.findOne(res[0].insertId))
    }

    update(id, data) {
        return this.findOne(id)
            .then(found => {
                const userUpdated = {
                    ...found,
                    ...data
                }

                const query = data.password ? `UPDATE ${this.table} SET firstname = ?, lastname = ?, email = ?, password = ?, updated_at = NOW() WHERE id = ?` : `UPDATE ${this.table} SET first_name = ?, last_name = ?, email = ?, updated_at = NOW() WHERE id = ?`
                
                return this.pool.execute(query, data.password ? [userUpdated.firstname, userUpdated.lastname, userUpdated.email, userUpdated.password, id] : [userUpdated.firstname, userUpdated.lastname, userUpdated.email, id])
                    .then(() => this.findOne(id))
            })
    }

}

module.exports = UserStore