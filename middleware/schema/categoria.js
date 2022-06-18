const { check, body, checkSchema } = require('express-validator')

const checkcategoria = {
  nombre_categoria: {
    notEmpty: true,
    errorMessage: 'No debe estar vacio'
  },
  status_categoria: {
    notEmpty: true,
    errorMessage: 'No debe estar vacio'
  },

}
module.exports = checkcategoria