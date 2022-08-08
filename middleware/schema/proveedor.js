const { check, body, checkSchema } = require('express-validator')

const checkproveedor = {
  personaId: {
    notEmpty: true,
    isNumeric: true,
    errorMessage: 'Debe ser Numerico o Esta vacio'
  },
  empresaId: {
    notEmpty: true,
    isNumeric: true,
    errorMessage: 'Debe ser Numerico o Esta vacio'
  }
}
module.exports = checkproveedor
