const Joi = require('joi')

const id = Joi.number().integer().messages({
    'number.base': '"id" debería ser un número',
    'number.integer': '"id", debería ser un número entero',
    'any.required': '"id" es un campo obligatorio'
})

const title = Joi.string().min(3).max(255).messages({
    'string.base': '"title" debería ser un tipo de texto',
    'string.min': '"title" debería tener una longitud mínima de {#limit} caracteres',
    'string.max': '"title" debería tener una longitud máxima de {#limit} caracteres',
    'any.required': '"title" es un campo obligatorio'
})

const content = Joi.string().min(3).messages({
    'string.base': '"title" debería ser un tipo de texto',
    'string.min': '"title" debería tener una longitud mínima de {#limit} caracteres',
    'any.required': '"content" es un campo obligatorio'
})

const createPostSchema = Joi.object({
    title: title.required(),
    content: content.required()
})

const updatePostSchema = Joi.object({
    title,
    content
})

const getPostSchema = Joi.object({
    id: id.required()
})

module.exports = {
    createPostSchema,
    updatePostSchema,
    getPostSchema
}