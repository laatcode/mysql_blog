require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const routes = require('./routes')

// Middlewares
const resourceNotFound = require('./middlewares/resourceNotFound.middleware')
const routeNotFound = require('./middlewares/routeNotFound.middleware')
const errorHandler = require('./middlewares/errorHandler.middleware')

app.use(express.json())
app.get('/', (req, res) => res.send('Server running'))
routes(app)

app.use(resourceNotFound)
app.use(routeNotFound)
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running at port ${PORT}`))