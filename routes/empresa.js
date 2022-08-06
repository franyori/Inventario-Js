var express = require('express')
var router = express.Router()
var controller = require('../controllers/empresa')
var empresaValidator = require('../middleware/validator/empresa')
var empresaSchema = require('../middleware/schema/empresa')
const { body, checkSchema, param } = require('express-validator')
const validator = require('../middleware/validator')

router.get('/list', controller.list)
router.post(
  '/add',
  checkSchema(empresaSchema),
  validator.returnErrors,
  controller.create
)
router.get(
  '/show/:id',
  param('id').custom(id => {
    return empresaValidator.exists(id)
  }),
  validator.returnErrors,
  controller.show
)
router.put(
  '/update/:id',
  param('id').custom(id => {
    return empresaValidator.exists(id)
  }),
  validator.returnErrors,
  controller.update
)
router.delete(
  '/delete/:id',
  param('id').custom(id => {
    return empresaValidator.exists(id)
  }),
  validator.returnErrors,
  controller.delete
)
module.exports = router
