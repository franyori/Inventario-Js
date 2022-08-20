const { UnidadMedidad } = require('../../models/index')

async function store (params) {
  return UnidadMedidad.create({ ...params }).catch(error => {
    return Promise.reject(error)
  })
}

async function getAll (filters) {
  return UnidadMedidad.findAll({ where: { ...filters } }).catch(error => {
    return Promise.reject(error)
  })
}

async function getOne (filters) {
  return UnidadMedidad.findOne({ where: { ...filters } }).catch(error => {
    return Promise.reject(error)
  })
}

async function update (params, filters) {
  return UnidadMedidad.update(params, { where: { ...filters } }).catch(
    error => {
      return Promise.reject(error)
    }
  )
}

async function destroy (filters) {
  return UnidadMedidad.destroy({ where: { ...filters } }).catch(error => {
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
