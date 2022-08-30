const stockService = require('../services/stock')

class stockController {
  create = (req, res, next) => {
    return stockService
      .store(req.body)
      .then(newadd => {
        return res.status(200).json(newadd)
      })
      .catch(err => {
        console.log(err)
        res.status(400).send(err)
      })
  }

  list = (req, res, next) => {
    return stockService
      .getAll()
      .then(newadd => {
        return res.status(200).json(newadd)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  show = (req, res, next) => {
    return stockService
      .getOne({ id: req.params.id })
      .then(newadd => {
        return res.status(200).json(newadd)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  showId = (req, res, next) => {
    return stockService
      .getId({ id: req.params.id })
      .then(newadd => {
        return res.status(200).json(newadd)
      })
      .catch(err => {
        console.log(err)
        res.status(400).send(err)
      })
  }

  update = (req, res, next) => {
    return stockService
      .update(req.body, {
        id: req.params.id
      })
      .then(() => {
        return stockService.getOne({ productoId: req.params.id })
      })
      .then(newadd => {
        return res.status(200).json(newadd)
      })
      .catch(err => {
        console.log(err)
        res.status(400).send(err)
      })
  }

}

module.exports = new stockController()
