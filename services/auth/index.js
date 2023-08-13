const { Usuario } = require('../../models/index')

const { isEmpty } = require('underscore')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const path = require('path')
const fs = require('fs')
const authConfig = require('../../config/auth')

async function sign({ usuario, password }) {
  const user = await Usuario.findOne({ where: { usuario } })
  if (isEmpty(user)) throw 'Invalido usuario o password'

  verified = await bcrypt.compare(password, user.password)
  if (!verified) throw 'Invalido usuario o password'

  const accesToken = jwt.sign({ usuario: usuario }, authConfig.secret, {
    expiresIn: authConfig.expires
  })
  const usuarioToken = usuario
  return ({accesToken,usuarioToken})
}

async function logout(req, res) {
  try {
    let tokenNew = jwt.sign({ usuario: 'out' }, authConfig.secret, {
      expiresIn: '1s'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  sign,
  logout
}
