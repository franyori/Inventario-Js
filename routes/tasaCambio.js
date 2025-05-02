var express = require('express')
var router = express.Router()
var controller = require('../controllers/tasaCambio')
var tasaCambioValidator = require('../middleware/validator/tasaCambio')
var tasaCambioSchema = require('../middleware/schema/tasaCambio')
const {
  body,
  checkSchema,
  param
} = require('express-validator')
const validator = require('../middleware/validator') // esta funcion es del paquete express-validator nos devuelve mensae de eroor si lo ay
const verifyToken = require("../middleware/verifyToken")

router.get('/list', verifyToken, controller.list)
router.post(
  '/add', checkSchema(tasaCambioSchema),
  validator.returnErrors,
  controller.create
)
router.get(
  '/show/:id', verifyToken,
  param('id').custom(id => {
    return tasaCambioValidator.exists(id)
  }),
  validator.returnErrors,
  controller.show
)
router.put(
  '/update/:id', verifyToken,
  param('id').custom(id => {
    return tasaCambioValidator.exists(id)
  }),
  validator.returnErrors,
  controller.update
)

router.delete(
  '/delete/:id', verifyToken,
  param('id').custom(id => {
    return tasaCambioValidator.exists(id)
  }),
  validator.returnErrors,
  controller.delete
)

router.get(
  '/findOne', verifyToken,
  validator.returnErrors,
  controller.findOne
)

module.exports = router