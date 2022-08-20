var express = require('express')
var router = express.Router()
var controller = require('../controllers/proveedor')
var proveedorValidator = require('../middleware/validator/proveedor')
var proveedorSchema = require('../middleware/schema/proveedor')
const { body, checkSchema, param } = require('express-validator')
const validator = require('../middleware/validator')

router.get('/list', controller.list)
router.post(
  '/add',
  checkSchema(proveedorSchema),
  validator.returnErrors,
  controller.create
)
router.get(
    '/show/:id',
    param('id').custom(id => {
      return proveedorValidator.exists(id)
    }),
    validator.returnErrors,
    controller.show
  )
router.put(
  '/update/:id',
  param('id').custom(id => {
    return proveedorValidator.exists(id)
  }),
  validator.returnErrors,
  controller.update
)

router.delete(
  '/delete/:id',
  param('id').custom(id => {
    return proveedorValidator.exists(id)
  }),
  validator.returnErrors,
  controller.delete
)

module.exports = router
