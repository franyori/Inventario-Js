const { TasaCambio } = require('../../models/index')

async function store (params) {
  return TasaCambio.create({ ...params }).catch(error => {
    return Promise.reject(error)
  })
}

async function getAll (filters) {
  return TasaCambio.findAll({ where: { ...filters } }).catch(error => {
    return Promise.reject(error)
  })
}

async function getOne (filters) {
  return TasaCambio.findOne({ where: { ...filters } }).catch(error => {
    return Promise.reject(error)
  })
}

async function findOne () {
  return TasaCambio.findOne({order: [['createdAt', 'DESC']]}).catch(error => {
    return Promise.reject(error)
  })
}

async function update (params, filters) {
  return TasaCambio.update(params, { where: { ...filters } }).catch(error => {
    return Promise.reject(error)
  })
}

async function destroy (filters) {
  return TasaCambio.destroy({ where: { ...filters } }).catch(error => {
    return Promise.reject(error)
  })
}

module.exports = {
  store,
  getAll,
  getOne,
  update,
  destroy,
  findOne
}
