var express = require('express')
var router = express.Router()
var controller = require('../controllers/categoria')
var categoriaValidator = require('../middleware/validator/categoria')
var categoriaSchema = require('../middleware/schema/categoria')
const { body,checkSchema, param } = require('express-validator')
const validator = require('../middleware/validator') // esta funcion es del paquete express-validator nos devuelve mensae de eroor si lo ay
//const categoriaValidator = require('../middleware/validator/categoria')// aqui es una comprobacion de que n exist otro ID igual

router.get('/list', controller.list)
router.post(
  '/add',checkSchema(categoriaSchema),
  validator.returnErrors,
  controller.create
)
router.get(
  '/show/:id',
  param('id').custom(id => {
    return categoriaValidator.exists(id)
  }),
  validator.returnErrors,
  controller.show
)
router.put(
  '/update/:id',
  param('id').custom(id => {
    return categoriaValidator.exists(id)
  }),
  validator.returnErrors,
  controller.update
)

router.delete(
  '/delete/:id',
  param('id').custom(id => {
    return categoriaValidator.exists(id)
  }),
  validator.returnErrors,
  controller.delete
)

module.exports = router
