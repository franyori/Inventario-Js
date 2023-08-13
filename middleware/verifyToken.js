const { Usuario } = require('../models/index')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')

const verifyToken = (req, res, next) => {
  const token =
    req.body.token ||
    req.query.token ||
    req.headers['Authorization'] ||
    req.headers.authorization
  if (!token) return res.status(403).json('No autorizado')

  const [prefix, securityJwt] = token.split(' ')

  if (String(prefix).trim() != 'Bearer')
    return res.status(403).json('No autorizado')
  jwt.verify(
    String(securityJwt).trim(),
    authConfig.secret,
    {
      expiresIn: authConfig.expires
    },
    async function (err, decoded) {
      if (err) {
        return res
          .status(403)
          .json(`Error validando acceso token: Session a expirado`)
      } else {
        await Usuario.findOne({
          where: {
            usuario: decoded.usuario
          }
        }).then(user => {
          req.usuario = user
          next()
        })
      }
    }
  )
}

module.exports = verifyToken
