const presentacionProdServices = require('../services/presentacionProd')

class presentacionProdController {
  create = (req, res, next) => {
    return presentacionProdServices
      .store(req.body)
      .then(newpresentacion => {
        res.status(200).json(newpresentacion)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  list = (req, res, next) => {
    return presentacionProdServices
      .getAll()
      .then(newpresentacion => {
        res.status(200).json(newpresentacion)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  show = (req, res, next) => {
    return presentacionProdServices
      .getOne({ id: req.params.id })
      .then(newpresentacion => {
        res.status(200).json(newpresentacion)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  update = (req, res, next) => {
    return presentacionProdServices
      .update(req.body, { id: req.params.id })
      .then(() => {
        return presentacionProdServices.getOne({ id: req.params.id })
      })
      .then(newpresentacion => {
      return  res.status(200).json(newpresentacion)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  delete = (req, res, next) => {
    return presentacionProdServices
      .destroy({ id: req.params.id })
      .then(() => {
        res.status(200).json({ success: 'Presentacion de Producto Elimnado' })
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }
}

module.exports = new presentacionProdController()
