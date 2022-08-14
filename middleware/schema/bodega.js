const { check, body, checkSchema } = require('express-validator')

const checkbodega = {
  nombre_bodega: {
    notEmpty: true,
    errorMessage: 'No debe estar vacio'
  },
  ubicacion_bodega: {
    notEmpty: true,
    errorMessage: 'No debe estar vacio'
  },
  status_bodega: {
    notEmpty: true,
    errorMessage: 'No debe estar vacio'
  },

}
module.exports = checkbodega