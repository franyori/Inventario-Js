const productoService = require('../services/producto')

class productoController {
  create = (req, res, next) => {
    return productoService
      .store(req.body)
      .then(newproducto => {
        return res.status(200).json(newproducto)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  list = (req, res, next) => {
    return productoService
      .getAll()
      .then(newproducto => {
        res.status(200).json(newproducto)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  show = (req, res, next) => {
    return productoService
      .getOne({ id: req.params.id })
      .then(newproducto => {
        res.status(200).json(newproducto)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  update = (req, res, next) => {
    return productoService
      .update(req.body, { id: req.params.id })
      .then(() => {
        return productoService.getOne({ id: req.params.id })
      })
      .then(newproducto => {
        return res.status(200).json(newproducto)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  delete = (req, res, next) => {
    return productoService
      .destroy({ id: req.params.id })
      .then(() => {
        res.status(200).json({ success: 'Producto Elimnado' })
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }
}

module.exports = new productoController()
