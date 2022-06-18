const { check, body, checkSchema } = require('express-validator')

const checkcliente = {
  tipo_client: {
    notEmpty: true,
    errorMessage: 'No debe estar vacio'
  },
  cedula_client: {
    notEmpty: true,
    isNumeric: true,
    errorMessage: 'Debe ser Numerico o Esta vacio'
  },
  nombre_client: {
    notEmpty: true,
    errorMessage: 'No debe estar vacio'
  },
  razonsocial_client: {
    notEmpty: true,
    errorMessage: 'No debe estar vacio'
  }
}
module.exports = checkcliente
