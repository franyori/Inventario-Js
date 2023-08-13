var express = require('express')
var router = express.Router()
var controller = require('../controllers/persona')
var personaValidator = require('../middleware/validator/persona')
var personaSchema = require('../middleware/schema/persona')
const { body, checkSchema, param } = require('express-validator')
const validator = require('../middleware/validator')
const verifyToken = require("../middleware/verifyToken")

router.get('/list',verifyToken, controller.list)
router.post(
  '/add',verifyToken,
  checkSchema(personaSchema),
  validator.returnErrors,
  controller.create
)
router.get(
  '/show/:id',verifyToken,
  param('id').custom(id => {
    return personaValidator.exists(id)
  }),
  validator.returnErrors,
  controller.show
)
router.put(
  '/update/:id',verifyToken,
  param('id').custom(id => {
    return personaValidator.exists(id)
  }),
  validator.returnErrors,
  controller.update
)
router.delete(
  '/delete/:id',verifyToken,
  param('id').custom(id => {
    return personaValidator.exists(id)
  }),
  validator.returnErrors,
  controller.delete
)
module.exports = router
