const { FormaPago } = require('../../models/index')

async function store (params) {
  return FormaPago.create({ ...params }).catch(error => {
    return Promise.reject(error)
  })
}

async function getAll (filters) {
  return FormaPago.findAll({ where: { ...filters } }).catch(error => {
    return Promise.reject(error)
  })
}

async function getOne (filters) {
  return FormaPago.findOne({ where: { ...filters } }).catch(error => {
    return Promise.reject(error)
  })
}

async function update (params, filters) {
  return FormaPago.update(params, { where: { ...filters } }).catch(error => {
    return Promise.reject(error)
  })
}

async function destroy (filters) {
  return FormaPago.destroy({ where: { ...filters } }).catch(error => {
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
