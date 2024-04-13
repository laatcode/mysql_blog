require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

const pool = require('./libs/mysql')

app.get('/', (req, res) => res.send('Server running'))

app.listen(PORT, () => console.log(`Server running at port ${PORT}`))