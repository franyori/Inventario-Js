const { check, body, checkSchema } = require('express-validator')

const checkunidad = {
  nombre_unidad: {
    notEmpty: true,
    errorMessage: 'Debe ser Numerico o Esta vacio'
  },
  status_unidad: {
    notEmpty: true,
    errorMessage: 'Debe ser Numerico o Esta vacio'
  },
  cantidad_unidad: {
    notEmpty: true,
    isNumeric: true,
    errorMessage: 'Debe ser Numerico o Esta vacio'
  }
}
module.exports = checkunidad
