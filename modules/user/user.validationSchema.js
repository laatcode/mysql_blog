const Joi = require('joi')

const id = Joi.number().integer().messages({
    'number.base': '"id" debería ser un número',
    'number.integer': '"id", debería ser un número entero',
    'any.required': '"id" es un campo obligatorio'
})

const email = Joi.string().email().messages({
    'string.base': '"email" debería ser un correo electrónico',
    'string.email': '"email" debería ser un correo electrónico válido',
    'any.required': '"email" es un campo obligatorio'
})

const password = Joi.string().messages({
    'string.base': '"password" debería ser un tipo de texto',
    'any.required': '"password" es un campo obligatorio'
})

const confirmPassword = Joi.string().messages({
    'string.base': '"confirmPassword" debería ser un tipo de texto',
    'any.required': '"confirmPassword" es un campo obligatorio'
})

const createUserSchema = Joi.object({
    email: email.required(),
    password: password.required(),
    confirmPassword: confirmPassword.required()
})

const updateUserSchema = Joi.object({
    email,
    password,
    confirmPassword
})

const getUserSchema = Joi.object({
    id: id.required()
})

module.exports = {
    createUserSchema,
    updateUserSchema,
    getUserSchema
}