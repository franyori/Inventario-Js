const { check, body, checkSchema } = require('express-validator')

const checkPresentacionProd = {

  unidadMedidadId: {
    notEmpty: true,
    isNumeric: true,
    errorMessage: 'Debe ser Numerico o Esta vacio'
  },
  nombre_present: {
    notEmpty: true,
    errorMessage: 'No debe estar Vació'
  }
}
module.exports = checkPresentacionProd
