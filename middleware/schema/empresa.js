const { check, body, checkSchema } = require('express-validator')

const checkempresa = {
    nombre_empre: {
    notEmpty: true,
    errorMessage: 'No debe estar vacio'
  },
  tipo_empre: {
    notEmpty: true,
    errorMessage: 'No debe estar vacio'
  },
  rif_empre: {
    notEmpty: true,
    isNumeric: true,
    errorMessage: 'Debe ser Numerico o Esta vacio'
  },
  direccion_empre: {
    notEmpty: true,
    errorMessage: 'No debe estar vacio'
  },
  representante_empre: {
    notEmpty: true,
    errorMessage: 'No debe estar vacio'
  }
}
module.exports = checkempresa
