const { Persona } = require('../../models/index')

async function store (params) {
  return Persona.create({ ...params }).catch(error => {
    console.log(error)
    return Promise.reject(error)
  })
}

async function getAll (filters) {
  return Persona.findAll({
    where: { ...filters }
  }).catch(error => {
    return Promise.reject(error)
  })
}

async function getOne (filters) {
  return Persona.findOne({
    where: { ...filters }
  }).catch(error => {
    return Promise.reject(error)
  })
}

async function update (params, filters) {
  return Persona.update(params, { where: { ...filters } }).catch(error => {
    console.log(error)
    return Promise.reject(error)
  })
}

async function destroy (filters) {
  return Persona.destroy({ where: { ...filters } }).catch(error => {
    console.log(error)
    return Promise.reject(error)
  })
}
module.exports = {
  store,
  getAll,
  getOne,
  update,
  destroy
}
