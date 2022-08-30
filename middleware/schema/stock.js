const { check, body, checkSchema } = require('express-validator')

const checkstock = {
  cantidad_inicial: {
    notEmpty: true,
    isNumeric: true,
    errorMessage: 'No debe estar vacio y debe ser numerico'
  },
  cantidad_actual: {
    notEmpty: true,
    isNumeric: true,
    errorMessage: 'No debe estar vacio  y debe ser numerico'
  },
  productoId: {
    notEmpty: true,
    isNumeric: true,
    errorMessage: 'No debe estar vacio  y debe ser numerico'
  },
  cantidad_reservda: {
    notEmpty: true,
    isNumeric: true,
    errorMessage: 'No debe estar vacio  y debe ser numerico'
  },

}
module.exports = checkstock