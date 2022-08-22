const unidadMedidaService = require('../services/unidadMedida')

class unidadMedidaController {
  create = (req, res, next) => {
    return unidadMedidaService
      .store(req.body)
      .then(newUnidad => {
        return res.status(200).json(newUnidad)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  list = (req, res, next) => {
    return unidadMedidaService
      .getAll()
      .then(newUnidad => {
        return res.status(200).json(newUnidad)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  show = (req, res, next) => {
    return unidadMedidaService
      .getOne({ id: req.params.id })
      .then(newUnidad => {
        return res.status(200).json(newUnidad)
      })
      .catch(error => {
        res.status(400).send(err)
      })
  }

  update = (req, res, next) => {
    return unidadMedidaService
      .update(req.body, { id: req.params.id })
      .then(() => {
        return unidadMedidaService.getOne({ id: req.params.id })
      })
      .then(newUnidad => {
        res.status(200).json(newUnidad)
      })
      .catch(error => {
        res.status(400).send(err)
      })
  }

  delete = (req, res, next) => {
    return unidadMedidaService
      .destroy({ id: req.params.id })
      .then(() => {
        return res.status(200).json({ success: 'Unidad de Medidad Eliminado' })
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }
}

module.exports = new unidadMedidaController()
