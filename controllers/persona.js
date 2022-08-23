const personaService = require('../services/persona/index.js')

class personaController {
  create = (req, res, next) => {
    return personaService
      .store(req.body)
      .then(newpersona => {
        return res.status(200).json(newpersona)
      })
      .catch(err => {
        console.log(err)
        res.status(400).send(err)
      })
  }

  list = (req, res, next) => {
    return personaService
      .getAll()
      .then(persona => {
        res.status(200).json(persona)
      })
      .catch(err => {
        console.log(err)
        res.status(400).send(err)
      })
  }

  show = (req, res, next) => {
    return personaService
      .getOne({
        id: req.params.id
      })
      .then(persona => {
        res.status(200).json(persona)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  update = (req, res, next) => {
    return personaService
      .update(req.body, {
        id: req.params.id
      })
      .then(() => {
        return personaService.getOne({
          id: req.params.id
        })
      })
      .then(persona => {
      return  res.status(200).json(persona)
      })
      .catch(err => {
        console.log(err)
        res.status(400).send(err)
      })
  }

  delete = (req, res, next) => {
    return personaService
      .destroy({ id: req.params.id })
      .then(() => {
        res.status(200).json({ success: 'Persona Eliminada' })
      })
      .catch(err => {
        console.log(err)
        res.status(400).send(err)
      })
  }
}
module.exports = new personaController()
