const categoriaService = require('../services/categoria') //llamamos a esta funcion que recibe los parametros
//const errors = require('../middleware/errors')

class categoriaController {
  //declaramos el controllador y despues sus operaciones

  create = (req, res, next) => {
    return categoriaService
      .store(req.body)
      .then(newCategoria => {
        return res.status(200).json(newCategoria)
      }) /* .catch((error) => errors.response(error)) */
      .catch(err => {
        //console.log(err);
        res.status(400).send(err)
      })
  }

  list = (req, res, next) => {
    return categoriaService
      .getAll()
      .then(categoria => {
        return res.status(200).json(categoria)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  show = (req, res, next) => {
    return categoriaService
      .getOne({
        id: req.params.id
      })
      .then(categoria => {
        return res.status(200).json(categoria)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  update = (req, res, next) => {
    return categoriaService
      .update(req.body, {
        id: req.params.id
      })
      .then(() => {
        return categoriaService.getOne({
          id: req.params.id
        })
      })
      .then(categoria => {
        return res.status(200).json(categoria)
      })
      .catch(err => {
        //console.log(err)
        res.status(400).send(err)
      })
  }

  delete = (req, res, next) => {
    return categoriaService
      .destroy({
        id: req.params.id
      })
      .then(() => {
        return res.status(200).json({ success: 'Categoria Eliminada' })
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }
}
module.exports = new categoriaController()
