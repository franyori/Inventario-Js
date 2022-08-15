const empresaService = require('../services/empresa/index')

class empresaController {
  create = (req, res, next) => {
    return empresaService
      .store(req.body)
      .then(newEmpresa => {
        return res.status(200).json(newEmpresa)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  list = (req, res, next) => {
    return empresaService
      .getAll()
      .then(newEmpresa => {
        return res.status(200).json(newEmpresa)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }
  show = (req, res, next) => {
    return empresaService
      .getOne({ id: req.params.id })
      .then(newEmpresa => {
        return res.status(200).json(newEmpresa)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  update = (req, res, next) => {
    return empresaService
      .update(req.body, { id: req.params.id })
      .then(() => {
        return empresaService.getOne({ id: req.params.id })
      })
      .then(newEmpresa => {
        return res.status(200).json(newEmpresa)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }
  delete = (req, res, next) => {
    return empresaService
      .destroy({ id: req.params.id })
      .then(() => {
        return res.status(200).json({ success: 'Empresa Eliminada' })
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }
}
module.exports = new empresaController()
