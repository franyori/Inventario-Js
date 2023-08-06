var express = require('express')
var router = express.Router()
var controller = require('../controllers/producto')
var productoValidator = require('../middleware/validator/producto')
var productoSchema = require('../middleware/schema/producto')
const { body, checkSchema, param } = require('express-validator')
const validator = require('../middleware/validator')
const verifyToken = require("../middleware/verifyToken")

router.get('/list',verifyToken, controller.list)
router.post(
  '/add',verifyToken,
  checkSchema(productoSchema),
  validator.returnErrors,
  controller.create
)
router.get(
  '/show/:id',verifyToken,
  param('id').custom(id => {
    return productoValidator.exists(id)
  }),
  validator.returnErrors,
  controller.show
)
router.put(
  '/update/:id',verifyToken,
  param('id').custom(id => {
    return productoValidator.exists(id)
  }),
  validator.returnErrors,
  controller.update
)
router.delete(
  '/delete/:id',verifyToken,
  param('id').custom(id => {
    return productoValidator.exists(id)
  }),
  validator.returnErrors,
  controller.delete
)
module.exports = router
