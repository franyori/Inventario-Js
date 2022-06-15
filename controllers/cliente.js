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

  show = (req, res, next) => {
    return clienteService
      .getOne({
        id: req.params.id
      })
      .then(client => {
        return res.status(200).json(client)
      })
      .catch(err => {
        return res.status(400).send(err)
      })
  }

  update = (req, res, next) => {
    return clienteService
      .update(req.body, {
        id: req.params.id
      })
      .then(() => {
        return clienteService.getOne({
          id: req.params.id
        })
      })
      .then(client => {
        return res.status(200).json(client)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }
  
  async update2 (req, res, next) {
    try {
      await clienteService.update2(req.body, {
        id: req.params.id
      })
      let data = await clienteService.getOne({
        id: req.params.id
      })
      res.status(200).json(data)
    } catch (err) {
      res.status(400).send(err)
    }
  }

  delete = (req, res, next) => {
    return clienteService
      .destroy({
        id: req.params.id
      })
      .then(() => {
        res.status(200).json({ success: 'Cliente Eliminado' })
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }
}

module.exports = new clienteController()
