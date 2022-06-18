var express = require('express')
var router = express.Router()
var controller = require('../controllers/cliente')
var clienteValidator = require('../middleware/validator/cliente')
var clienteSchema = require('../middleware/schema/cliente')
const { body, checkSchema, param } = require('express-validator')
const validator = require('../middleware/validator')

router.get('/list', controller.list)
router.post(
  '/add',
  checkSchema(clienteSchema),
  validator.returnErrors,
  controller.create
)
router.get(
  '/show/:id',
  param('id').custom(id => {
    return clienteValidator.exists(id)
  }),
  validator.returnErrors,
  controller.show
)
router.put(
  '/update/:id',
  param('id').custom(id => {
    return clienteValidator.exists(id)
  }),
  validator.returnErrors,
  controller.update2
)
router.delete(
  '/delete/:id',
  param('id').custom(id => {
    return clienteValidator.exists(id)
  }),
  validator.returnErrors,
  controller.delete
)
module.exports = router
