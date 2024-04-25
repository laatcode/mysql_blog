const router = require('express').Router()
const PostStore = require('./PostStore')
const PostController = require('./PostController')
const controller = new PostController(PostStore, 'posts')
const { getPostSchema, createPostSchema, updatePostSchema } = require('./post.validationSchema')

router
    .get('/', (req, res, next) => {
        controller.find()
            .then(result => res.json(result))
            .catch(error => next(error))
    })

    .get('/:id', (req, res, next) => {
        controller.findOne(getPostSchema, req.params.id)
            .then(result => res.json(result))
            .catch(error => next(error))
    })

    .post('/', (req, res, next) => {
        controller.create(createPostSchema, req.body)
            .then(result => res.status(201).json(result))
            .catch(error => next(error))
    })

    .patch('/:id', (req, res, next) => {
        controller.update(getPostSchema, updatePostSchema, req.params.id, req.body)
            .then(result => res.json(result))
            .catch(error => next(error))
    })

    .delete('/:id', (req, res, next) => {
        controller.delete(getPostSchema, req.params.id)
            .then(result => res.json(result))
            .catch(error => next(error))
    })

module.exports = router