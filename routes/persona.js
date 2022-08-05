var express = require('express')
var router = express.Router()
var controller = require('../controllers/persona')
var personaValidator = require('../middleware/validator/persona')
var personaSchema = require('../middleware/schema/persona')
const { body, checkSchema, param } = require('express-validator')
const validator = require('../middleware/validator')

router.get('/list', controller.list)
router.post('/add',checkSchema(personaSchema),validator.returnErrors,controller.create)

module.exports = router
