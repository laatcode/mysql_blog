const Joi = require('joi')

const email = Joi.string().email().messages({
    'string.base': '"email" debería ser un correo electrónico',
    'string.email': '"email" debería ser un correo electrónico válido',
    'any.required': '"email" es un campo obligatorio'
})

const password = Joi.string().messages({
    'string.base': '"password" debería ser un tipo de texto',
    'any.required': '"password" es un campo obligatorio'
})

const loginSchema = Joi.object({
    email: email.required(),
    password: password.required()
})

module.exports = {
    loginSchema
}