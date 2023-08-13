const { check, body, checkSchema } = require('express-validator')

const checkusuario = {
  usuario: {
    notEmpty: true,
    errorMessage: 'No debe estar vacio'
  },
  password: {
    notEmpty: true,
    errorMessage: 'No debe estar vacio'
  },
  personaId: {
    notEmpty: true,
    isNumeric: true,
    errorMessage: 'Debe ser Numerico o Esta vacio'
  },
  rolId: {
    notEmpty: true,
    isNumeric: true,
    errorMessage: 'Debe ser Numerico y no estar vacio'
  },
  status_usuario: {
    notEmpty: true,
    errorMessage: 'No debe estar vacio'
  },
  
}
module.exports = checkusuario
