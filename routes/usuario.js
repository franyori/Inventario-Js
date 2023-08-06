var express = require('express')
var router = express.Router()
var controller = require('../controllers/usuario')
var usuarioValidator = require('../middleware/validator/usuario')
var usuarioSchema = require('../middleware/schema/usuario')
const { body, checkSchema, param } = require('express-validator')
const validator = require('../middleware/validator')
const verifyToken = require("../middleware/verifyToken")

router.get('/list', controller.list)
router.post(
  '/add',verifyToken,
  checkSchema(usuarioSchema),
  validator.returnErrors,
  controller.create
)
router.get(
  '/show/:id',verifyToken,
  param('id').custom(id => {
    return usuarioValidator.exists(id)
  }),
  validator.returnErrors,
  controller.show
)
router.put(
  '/update/:id',verifyToken,
  param('id').custom(id => {
    return usuarioValidator.exists(id)
  }),
  validator.returnErrors,
  controller.update
)
router.delete(
  '/delete/:id',verifyToken,
  param('id').custom(id => {
    return usuarioValidator.exists(id)
  }),
  validator.returnErrors,
  controller.delete
)
module.exports = router
