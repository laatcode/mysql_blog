const router = require('express').Router()
const PostController = require('./PostController')
const controller = new PostController()

router
    .get('/', (req, res, next) => {
        controller.find()
            .then(result => res.json(result))
            .catch(error => next(error))
    })

module.exports = router