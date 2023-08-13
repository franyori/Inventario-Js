var express = require('express')
var router = express.Router()
var controller = require('../controllers/formaPago')
var formaPagoValidator = require('../middleware/validator/formaPago')
var formaPagoSchema = require('../middleware/schema/formaPago')
const {
  body,
  checkSchema,
  param
} = require('express-validator')
const validator = require('../middleware/validator') // esta funcion es del paquete express-validator nos devuelve mensae de eroor si lo ay
const verifyToken = require("../middleware/verifyToken")

router.get('/list', verifyToken, controller.list)
router.post(
  '/add', checkSchema(formaPagoSchema),
  validator.returnErrors,
  controller.create
)
router.get(
  '/show/:id', verifyToken,
  param('id').custom(id => {
    return formaPagoValidator.exists(id)
  }),
  validator.returnErrors,
  controller.show
)
router.put(
  '/update/:id', verifyToken,
  param('id').custom(id => {
    return formaPagoValidator.exists(id)
  }),
  validator.returnErrors,
  controller.update
)

router.delete(
  '/delete/:id', verifyToken,
  param('id').custom(id => {
    return formaPagoValidator.exists(id)
  }),
  validator.returnErrors,
  controller.delete
)

module.exports = router