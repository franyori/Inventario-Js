var express = require('express')
var router = express.Router()
var controller = require('../controllers/bodega')
var bodegaValidator = require('../middleware/validator/bodega')
var bodegaSchema = require('../middleware/schema/bodega')
const { body, checkSchema, param } = require('express-validator')
const validator = require('../middleware/validator')
const verifyToken = require("../middleware/verifyToken")

router.get('/list',verifyToken, controller.list)
router.post(
  '/add',verifyToken,
  checkSchema(bodegaSchema),
  validator.returnErrors,
  controller.create
)
router.get(
  '/show/:id',verifyToken,
  param('id').custom(id => {
    return bodegaValidator.exists(id)
  }),
  validator.returnErrors,
  controller.show
)
router.put(
  '/update/:id',verifyToken,
  param('id').custom(id => {
    return bodegaValidator.exists(id)
  }),
  validator.returnErrors,
  controller.update
)
router.delete(
  '/delete/:id',verifyToken,
  param('id').custom(id => {
    return bodegaValidator.exists(id)
  }),
  validator.returnErrors,
  controller.delete
)
module.exports = router
