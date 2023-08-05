const usuarioService = require('../services/usuario/index')

class usuarioController {
  create = (req, res, next) => {
    return usuarioService
      .store(req.body)
      .then(newobj => {
        return res.status(200).json(newobj)
      })
      .catch(err => {
        console.log(err)
        res.status(400).send(err)
      })
  }

  list = (req, res, next) => {
    return usuarioService
      .getAll()
      .then(obj => {
        res.status(200).json(obj)
      })
      .catch(err => {
        console.log(err)
        res.status(400).send(err)
      })
  }

  show = (req, res, next) => {
    return usuarioService
      .getOne({
        id: req.params.id
      })
      .then(obj => {
        res.status(200).json(obj)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  update = (req, res, next) => {
    return usuarioService
      .update(req.body, {
        id: req.params.id
      })
      .then(() => {
        return usuarioService.getOne({
          id: req.params.id
        })
      })
      .then(obj => {
      return  res.status(200).json(obj)
      })
      .catch(err => {
        console.log(err)
        res.status(400).send(err)
      })
  }

  delete = (req, res, next) => {
    return usuarioService
      .destroy({ id: req.params.id })
      .then(() => {
        res.status(200).json({ success: 'Usuario Eliminado' })
      })
      .catch(err => {
        console.log(err)
        res.status(400).send(err)
      })
  }
}
module.exports = new usuarioController()
