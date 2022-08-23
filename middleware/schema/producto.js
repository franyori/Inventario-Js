const { check, body, checkSchema } = require('express-validator')

const checkproducto = {
  bodegaId: {
    notEmpty: true,
    isNumeric: true,
    errorMessage: 'Debe ser Numerico o Esta vacio'
  },
  categoriaId: {
    notEmpty: true,
    isNumeric: true,
    errorMessage: 'Debe ser Numerico o Esta vacio'
  },
  presentacionProdId: {
    notEmpty: true,
    isNumeric: true,
    errorMessage: 'Debe ser Numerico o Esta vacio'
  },
  nombre_prod: {
    notEmpty: true,
    errorMessage: 'Esta vacio'
  },
  precio_prod: {
    notEmpty: true,
    errorMessage: 'Esta vacio'
  }
}
module.exports = checkproducto
