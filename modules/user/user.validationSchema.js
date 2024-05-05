const Joi = require('joi')

const id = Joi.number().integer().messages({
    'number.base': '"id" debería ser un número',
    'number.integer': '"id", debería ser un número entero',
    'any.required': '"id" es un campo obligatorio'
})

const firstname = Joi.string().min(3).max(120).messages({
    'string.base': '"firstName" debería ser texto',
    'string.min': '"firstName" debería tener una longitud mínima de {#limit} caracteres',
    'string.max': '"firstName" debería tener una longitud máxima de {#limit} caracteres',
    'any.required': '"firstName" es un campo obligatorio'
})

const lastname = Joi.string().min(3).max(120).messages({
    'string.base': '"lastName" debería ser texto',
    'string.min': '"lastName" debería tener una longitud mínima de {#limit} caracteres',
    'string.max': '"lastName" debería tener una longitud máxima de {#limit} caracteres',
    'any.required': '"lastName" es un campo obligatorio'
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
    firstname: firstname.required(),
    lastname,
    email: email.required(),
    password: password.required(),
    confirmPassword: confirmPassword.required()
})

const updateUserSchema = Joi.object({
    firstname,
    lastname,
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