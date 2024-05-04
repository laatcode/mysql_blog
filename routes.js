const postRoutes = require('./modules/post')
const userRoutes = require('./modules/user')
const authRoutes = require('./modules/authentication')

const routes = app => {
    app.use('/posts', postRoutes)
    app.use('/users', userRoutes)
    app.use('/auth', authRoutes)
}

module.exports = routes