const BaseController = require('../core/BaseController')
const {ValidationError} = require('joi')
const bcrypt = require('bcryptjs')

class UserController extends BaseController {

    constructor(Store, tableName) {
        super(Store, tableName)
        bcrypt.genSalt(10)
            .then(res => this.salt = res)
    }

    async create(createSchema, data) {
        this.validateData(createSchema, data)
        const password = await bcrypt.hash(data.password, this.salt)
        const processedData = {
            ...data,
            password
        }
        
        return this.store.create(processedData)
    }

    async update(getSchema, updateSchema, id, data) {
        this.validateData(getSchema, { id })
        this.validateData(updateSchema, data)

        if(Object.keys(data).length === 0) {
            throw new ValidationError('Los campos a actualizar son obligatorios')
        }

        if(data.password) {
            const password = await bcrypt.hash(data.password, this.salt)
            const processedData = {
                ...data,
                password
            }

            return this.store.update(id, processedData)
        }

        return this.store.update(id, data)

    }

}

module.exports = UserController