require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const routes = require('./routes')
const errorHandler = require('./middlewares/errorHandler.middleware')
const notFound = require('./middlewares/notFound.middleware')

app.get('/', (req, res) => res.send('Server running'))
routes(app)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running at port ${PORT}`))