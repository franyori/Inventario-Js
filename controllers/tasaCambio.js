const tasaCambioService = require('../services/tasaCambio')

class tasaCambioController {
    
  create = (req, res, next) => {
    return tasaCambioService
      .store(req.body)
      .then(newpago => {
        return res.status(200).json(newpago)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  list = (req, res, next) => {
    return tasaCambioService
      .getAll()
      .then(newpago => {
        return res.status(200).json(newpago)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  show = (req, res, next) => {
    return tasaCambioService
      .getOne({ id: req.params.id })
      .then(newpago => {
        return res.status(200).json(newpago)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  findOne = async (req, res, next) => {
    return tasaCambioService
      .findOne()
      .then(findTasa => {
        return res.status(200).json(findTasa)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  update = (req, res, next) => {
    return tasaCambioService
      .update(req.body, { id: req.params.id })
      .then(() => {
        return tasaCambioService.getOne({ id: req.params.id })
      })
      .then(newpago => {
        return res.status(200).json(newpago)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  delete = (req, res, next) => {
    return tasaCambioService
      .destroy({ id: req.params.id })
      .then(() => {
        res.status(200).json({ success: 'Tasa de cambio eliminada' })
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }
}

module.exports = new tasaCambioController()
