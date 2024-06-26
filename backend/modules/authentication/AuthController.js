const bcrypt = require('bcryptjs')
const pool = require('../../libs/mysql')
const jwt = require('jsonwebtoken')
const CustomError = require('../../CustomError')

class AuthController {

    constructor() {
        bcrypt.genSalt(10).then(res => this.salt = res)
    }

    async login(email, passwordSent) {
        const data = await pool.execute(`SELECT id, firstname, lastname, password FROM users WHERE email = ?`, [email])
        if (data[0].length) {
            const { id, firstname, lastname, password } = data[0][0]
            if (password) {
                const result = await bcrypt.compare(passwordSent, password)

                if (result) {
                    return {
                        firstname,
                        lastname,
                        token: this.generateToken(id)
                    }
                }

                throw new CustomError(401, 'Usuario y/o contraseña incorrecta')
            }
        }
        throw new CustomError(401, 'Usuario y/o contraseña incorrecta')
    }

    generateToken(id) {
        return jwt.sign({ id }, process.env.JWT_SECRET, {
            expiresIn: '2h'
        })
    }
}

module.exports = AuthController