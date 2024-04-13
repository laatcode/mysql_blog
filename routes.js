const postRoutes = require('./modules/post')

const routes = app => {
    app.use('/posts', postRoutes)
}

module.exports = routes