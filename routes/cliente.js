var express = require('express')
var router = express.Router()
var controller = require('../controllers/cliente')
var clienteValidator = require('../middleware/validator/cliente')
const { body, param } = require('express-validator')
const validator = require('../middleware/validator')

router.get('/list', controller.list)
router.post('/add', validator.returnErrors, controller.create)

module.exports = router
