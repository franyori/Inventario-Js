const rolService = require('../services/rol') //llamamos a esta funcion que recibe los parametros

class rolController {
  //declaramos el controllador y despues sus operaciones

  create = (req, res, next) => {
    return rolService
      .store(req.body)
      .then(newRol => {
        return res.status(200).json(newRol)
      }) 
      .catch(err => {
        res.status(400).send(err)
      })
  }

  list = (req, res, next) => {
    return rolService
      .getAll()
      .then(rol => {
        return res.status(200).json(rol)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  show = (req, res, next) => {
    return rolService
      .getOne({
        id: req.params.id
      })
      .then(rol => {
        return res.status(200).json(rol)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  update = (req, res, next) => {
    return rolService
      .update(req.body, {
        id: req.params.id
      })
      .then(() => {
        return rolService.getOne({
          id: req.params.id
        })
      })
      .then(rol => {
        return res.status(200).json(rol)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  delete = (req, res, next) => {
    return rolService
      .destroy({
        id: req.params.id
      })
      .then(() => {
        return res.status(200).json({ success: 'Rol Eliminado' })
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }
}
module.exports = new rolController()
