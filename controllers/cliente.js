const clienteService = require('../services/cliente')

class clienteController {
  create = (req, res, next) => {
    return clienteService
      .store(req.body)
      .then(newCliente => {
        return res.status(200).json(newCliente)
      })
      .catch(err => {
        return res.status(400).send(err)
      })
  }

  list = (req, res, next) => {
    return clienteService
      .getAll()
      .then(client => {
        return res.status(200).json(client)
      })
      .catch(err => {
        return res.status(400).send(err)
      })
  }
}

module.exports = new clienteController()
