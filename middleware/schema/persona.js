const { check, body, checkSchema } = require('express-validator')

const checkpersona = {
  nacionalidad_per: {
    notEmpty: true,
    errorMessage: 'No debe estar vacio'
  },
  tipo_per: {
    notEmpty: true,
    errorMessage: 'No debe estar vacio'
  },
  documento_per: {
    notEmpty: true,
    isNumeric: true,
    errorMessage: 'Debe ser Numerico o Esta vacio'
  },
  nombres_per: {
    notEmpty: true,
    errorMessage: 'No debe estar vacio'
  },
  apellidos_per: {
    notEmpty: true,
    errorMessage: 'No debe estar vacio'
  }
}
module.exports = checkpersona
