class BaseController {

    constructor(Store, tableName) {
        this.store = new Store(tableName)
    }

    find() {
        return this.store.find()
    }

    findOne(getSchema, id) {
        this.validateData(getSchema, { id })
        return this.store.findOne(id)
    }

    create(createSchema, data) {
        this.validateData(createSchema, data)
        return this.store.create(data)
    }

    update(getSchema, updateSchema, id, data) {
        this.validateData(getSchema, { id })
        this.validateData(updateSchema, data)
        return this.store.update(id, data)
    }

    delete(getSchema, id) {
        this.validateData(getSchema, { id })
        return this.store.delete(id)
    }

    validateData(schema, data) {
        const {error} = schema.validate(data, { abortEarly: false })

        if(error) {
            throw error
        }
    }

}

module.exports = BaseController