require('dotenv').config()
const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
})

pool.getConnection()
    .then(connection =>
        connection.query('SHOW databases')
            .then(() => {
                pool.releaseConnection(connection)
                console.log('Conectado correctamente a la base de datos')
            })
    ).catch(error => {
        console.log(`Ha ocurrido un error al conectar a la base de datos: ${error}`)
        process.exit(1)
    })

module.exports = pool