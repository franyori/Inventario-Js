const { check, body, checkSchema } = require('express-validator')

const checkformaPago = {
  nombre_pago: {
    notEmpty: true,
    errorMessage: 'No debe estar vacio'
  },
  status_pago: {
    notEmpty: true,
    errorMessage: 'No debe estar vacio'
  },

}
module.exports = checkformaPago