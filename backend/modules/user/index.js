const router = require('express').Router()
const UserStore = require('./UserStore')
const UserController = require('./UserController')
const controller = new UserController(UserStore, 'users')
const { getUserSchema, createUserSchema, updateUserSchema } = require('./user.validationSchema')

router
    .get('/', (req, res, next) => {
        controller.find()
            .then(result => res.json(result))
            .catch(error => next(error))
    })

    .get('/:id', (req, res, next) => {
        controller.findOne(getUserSchema, req.params.id)
            .then(result => res.json(result))
            .catch(error => next(error))
    })

    .post('/', (req, res, next) => {
        controller.create(createUserSchema, req.body)
            .then(result => res.status(201).json(result))
            .catch(error => next(error))
    })

    .patch('/:id', (req, res, next) => {
        controller.update(getUserSchema, updateUserSchema, req.params.id, req.body)
            .then(result => res.json(result))
            .catch(error => next(error))
    })

    .delete('/:id', (req, res, next) => {
        controller.delete(getUserSchema, req.params.id)
            .then(result => res.json(result))
            .catch(error => next(error))
    })

module.exports = router