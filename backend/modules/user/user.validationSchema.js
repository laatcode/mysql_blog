const Joi = require('joi')

const id = Joi.number().integer().messages({
    'number.base': '"id" debería ser un número',
    'number.integer': '"id", debería ser un número entero',
    'any.required': '"id" es un campo obligatorio'
})

const firstname = Joi.string().min(3).max(120).messages({
    'string.base': '"firstname" debería ser texto',
    'string.min': '"firstname" debería tener una longitud mínima de {#limit} caracteres',
    'string.max': '"firstname" debería tener una longitud máxima de {#limit} caracteres',
    'any.required': '"firstname" es un campo obligatorio'
})

const lastname = Joi.string().min(3).max(120).messages({
    'string.base': '"lastname" debería ser texto',
    'string.min': '"lastname" debería tener una longitud mínima de {#limit} caracteres',
    'string.max': '"lastname" debería tener una longitud máxima de {#limit} caracteres',
    'any.required': '"lastname" es un campo obligatorio'
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

const createUserSchema = Joi.object({
    firstname: firstname.required(),
    lastname,
    email: email.required(),
    password: password.required()
})

const updateUserSchema = Joi.object({
    firstname,
    lastname,
    email,
    password
})

const getUserSchema = Joi.object({
    id: id.required()
})

module.exports = {
    createUserSchema,
    updateUserSchema,
    getUserSchema
}