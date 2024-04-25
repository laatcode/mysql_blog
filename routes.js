const postRoutes = require('./modules/post')
const userRoutes = require('./modules/user')

const routes = app => {
    app.use('/posts', postRoutes)
    app.use('/users', userRoutes)
}

module.exports = routes