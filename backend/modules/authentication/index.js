const router = require('express').Router()
const AuthController = require('./AuthController')
const controller = new AuthController()

router
    .post('/login', (req, res, next) => {
        controller.login(req.body.email, req.body.password)
            .then(data => res.json(data))
            .catch(error => next(error))
    })

module.exports = router