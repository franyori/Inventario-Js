var express = require('express')
var router = express.Router()
var controller = require('../controllers/presentacionProd')
var presentacionProdValidator = require('../middleware/validator/presentacionProd')
var presentacionProdSchema = require('../middleware/schema/presentacionProd')
const {
  body,
  checkSchema,
  param
} = require('express-validator')
const validator = require('../middleware/validator')
const verifyToken = require("../middleware/verifyToken")

router.get('/list', verifyToken, controller.list)
router.post(
  '/add', verifyToken,
  checkSchema(presentacionProdSchema),
  validator.returnErrors,
  controller.create
)
router.get(
  '/show/:id', verifyToken,
  param('id').custom(id => {
    return presentacionProdValidator.exists(id)
  }),
  validator.returnErrors,
  controller.show
)
router.put(
  '/update/:id', verifyToken,
  param('id').custom(id => {
    return presentacionProdValidator.exists(id)
  }),
  validator.returnErrors,
  controller.update
)
router.delete(
  '/delete/:id', verifyToken,
  param('id').custom(id => {
    return presentacionProdValidator.exists(id)
  }),
  validator.returnErrors,
  controller.delete
)
module.exports = router