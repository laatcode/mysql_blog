const router = require('express').Router()
const PostController = require('./PostController')
const controller = new PostController()

router
    .get('/', (req, res, next) => {
        controller.find()
            .then(result => res.json(result))
            .catch(error => next(error))
    })

    .get('/:id', (req, res, next) => {
        controller.findOne(req.params.id)
            .then(result => res.json(result))
            .catch(error => next(error))
    })

    .post('/', (req, res, next) => {
        controller.create(req.body)
            .then(result => res.status(201).json(result))
            .catch(error => next(error))
    })

module.exports = router