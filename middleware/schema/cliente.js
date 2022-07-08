const { check, body, checkSchema } = require('express-validator')

const checkcliente = {
  personaId: {
    notEmpty: true,
    isNumeric: true,
    errorMessage: 'Debe ser Numerico o Esta vacio'
  }
}
module.exports = checkcliente
