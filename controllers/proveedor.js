const proveedorServices = require('../services/proveedor')

class proveedorController {
  create = (req, res, next) => {
    return proveedorServices
      .store(req.body)
      .then(newProveedor => {
        return res.status(200).json(newProveedor)
      })
      .catch(err => {
        console.log(err)
        res.status(400).send(err)
      })
  }

  list = (req, res, next) => {
    return proveedorServices
      .getAll()
      .then(newProveedor => {
        return res.status(200).json(newProveedor)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  show = (req, res, next) => {
    return proveedorServices
      .getOne({
        id: req.params.id
      })
      .then(newProveedor => {
        return res.status(200).json(newProveedor)
      })
      .catch(err => {
        console.log(err)
        res.status(400).send(err)
      })
  }

  update = (req, res, next) => {
    return proveedorServices
      .update(req.body, {
        id: req.params.id
      })
      .then(() => {
        return proveedorServices.getOne({
          id: req.params.id
        })
      })
      .then(newProveedor => {
        return res.status(200).json(newProveedor)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  delete = (req, res, next) => {
    return proveedorServices
      .destroy({ id: req.params.id })
      .then(() => {
        return res.status(200).json({ success: 'Proveedor Eliminado' })
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }
}
module.exports = new proveedorController()
