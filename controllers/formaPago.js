const formaPagoService = require('../services/formaPago')

class formaPagoController {
    
  create = (req, res, next) => {
    return formaPagoService
      .store(req.body)
      .then(newpago => {
        return res.status(200).json(newpago)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  list = (req, res, next) => {
    return formaPagoService
      .getAll()
      .then(newpago => {
        return res.status(200).json(newpago)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  show = (req, res, next) => {
    return formaPagoService
      .getOne({ id: req.params.id })
      .then(newpago => {
        return res.status(200).json(newpago)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  update = (req, res, next) => {
    return formaPagoService
      .update(req.body, { id: req.params.id })
      .then(() => {
        return formaPagoService.getOne({ id: req.params.id })
      })
      .then(newpago => {
        return res.status(200).json(newpago)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  delete = (req, res, next) => {
    return formaPagoService
      .destroy({ id: req.params.id })
      .then(() => {
        res.status(200).json({ success: 'Forma de pago eliminada' })
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }
}

module.exports = new formaPagoController()
