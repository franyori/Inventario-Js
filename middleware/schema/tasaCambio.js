const { check, body, checkSchema } = require('express-validator')

const checktasaCambio = {
  precio_bcv: {
    notEmpty: true,
    errorMessage: 'No debe estar vacio'
  },
  precio_promedio: {
    notEmpty: true,
    errorMessage: 'No debe estar vacio'
  },
  precio_paralelo: {
    notEmpty: true,
    errorMessage: 'No debe estar vacio'
  },
  fecha_actualizacion: {
    notEmpty: true,
    errorMessage: 'No debe estar vacio'
  },
  usuario_actualizacion: {
    notEmpty: true,
    errorMessage: 'No debe estar vacio'
  },
  activo: {
    notEmpty: true,
    errorMessage: 'No debe estar vacio'
  },

}
module.exports = checktasaCambio