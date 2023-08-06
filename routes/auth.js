const express = require('express')
const router = express.Router()
const controller = require('../controllers/auth')
const { check, body, param } = require('express-validator')
const validator = require('../middleware/validator')
const verifyToken = require("../middleware/verifyToken")

router.route('/auth').post(
  check('usuario')
  .not()
  .isEmpty()
  .withMessage('Usuario requerido'),
  check('password')
  .not().isEmpty()
  .withMessage('Password requerido'),
  validator.returnErrors, 
  controller.login);

router.route('/logout',verifyToken).get(controller.logout);

module.exports = router