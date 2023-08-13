const { check, body, checkSchema } = require('express-validator')

const checkrol = {
  nombre_rol: {
    notEmpty: true,
    errorMessage: 'No debe estar vacio'
  }
  

}
module.exports = checkrol