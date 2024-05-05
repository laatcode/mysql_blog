const pool = require('../../libs/mysql')
const CustomError = require('../../CustomError')

class BaseStore {

    constructor(tableName) {
        this.pool = pool
        this.table = tableName
    }

    find() {
        return this.pool.execute(`SELECT * FROM ${this.table}`)
            .then(res => res[0])
    }

    findOne(id) {
        return this.pool.execute(`SELECT * FROM ${this.table} WHERE id = ?`, [id])
            .then(res => {
                const found = res[0][0]
                if(found) {
                    return found
                } else {
                    throw new CustomError(404, 'Recurso no encontrado')
                }
            })
    }

    delete(id) {
        return this.findOne(id)
            .then(() => this.pool.execute(`DELETE FROM ${this.table} WHERE ID = ?`, [id]))
            .then(() => `Recurso con id ${id} eliminado con éxito`)
    }
}

module.exports = BaseStore