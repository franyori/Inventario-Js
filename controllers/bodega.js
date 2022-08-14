const bodegaService = require('../services/bodega')

class bodegaController {
  create = (req, res, next) => {
    return bodegaService
      .store(req.body)
      .then(newbodega => {
        return res.status(200).json(newbodega)
      })
      .catch(err => {
        console.log(err)
        res.status(400).send(err)
      })
  }

  list = (req, res, next) => {
    return bodegaService
      .getAll()
      .then(newbodega => {
        return res.status(200).json(newbodega)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  show = (req, res, next) => {
    return bodegaService
      .getOne({ id: req.params.id })
      .then(newbodega => {
        return res.status(200).json(newbodega)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  update = (req, res, next) => {
    return bodegaService
      .update(req.body, {
        id: req.params.id
      })
      .then(() => {
        return bodegaService.getOne({ id: req.params.id })
      })
      .then(newbodega => {
        return res.status(200).json(newbodega)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  delete = (req, res, next) => {
    return bodegaService
      .destroy({ id: req.params.id })
      .then(() => {
        return res.status(200).json({ success: 'Bodega Eliminada!!!' })
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }
}

module.exports = new bodegaController()
