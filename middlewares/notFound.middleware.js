const notFound = (req, res, next) => {
    const error = new Error('Ruta no encontrada')
    res.status(404)
    next(error)
}

module.exports = notFound