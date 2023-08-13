var express = require('express')
var router = express.Router()
var controller = require('../controllers/stock')
var stockValidator = require('../middleware/validator/stock')
var stockSchema = require('../middleware/schema/stock')
const { body, checkSchema, param } = require('express-validator')
const validator = require('../middleware/validator')
const verifyToken = require("../middleware/verifyToken")

router.get('/list',verifyToken, controller.list)
router.post(
  '/add',verifyToken,
  checkSchema(stockSchema),
  validator.returnErrors,
  controller.create
)
router.get(
  '/show/:id',verifyToken,
  param('id').custom(id => {
    return stockValidator.exists(id)
  }),
  validator.returnErrors,
  controller.show
)
router.get(
  '/showId/:id',verifyToken,
  param('id').custom(id => {
    return stockValidator.existsProId(id)
  }),
  validator.returnErrors,
  controller.showId
)
router.put(
  '/update/:id',verifyToken,
  param('id').custom(id => {
    return stockValidator.exists(id)
  }),
  validator.returnErrors,
  controller.update
)

module.exports = router
