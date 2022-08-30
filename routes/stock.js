var express = require('express')
var router = express.Router()
var controller = require('../controllers/stock')
var stockValidator = require('../middleware/validator/stock')
var stockSchema = require('../middleware/schema/stock')
const { body, checkSchema, param } = require('express-validator')
const validator = require('../middleware/validator')

router.get('/list', controller.list)
router.post(
  '/add',
  checkSchema(stockSchema),
  validator.returnErrors,
  controller.create
)
router.get(
  '/show/:id',
  param('id').custom(id => {
    return stockValidator.exists(id)
  }),
  validator.returnErrors,
  controller.show
)
router.get(
  '/showId/:id',
  param('id').custom(id => {
    return stockValidator.existsProId(id)
  }),
  validator.returnErrors,
  controller.showId
)
router.put(
  '/update/:id',
  param('id').custom(id => {
    return stockValidator.exists(id)
  }),
  validator.returnErrors,
  controller.update
)

module.exports = router
