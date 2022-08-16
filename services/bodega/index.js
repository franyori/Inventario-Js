const { Bodega } = require('../../models/index')

async function store (params) {
  return Bodega.create({ ...params }).catch(error => {
    console.log(error)
    return Promise.reject(error)
  })
}

async function getAll (filters) {
  return Bodega.findAll({ where: { ...filters } }).catch(error => {
    return Promise.reject(error)
  })
}

async function getOne (filters) {
  return Bodega.findOne({ where: { ...filters } }).catch(error => {
    return Promise.reject(error)
  })
}

async function update (params, filters) {
  return Bodega.update(params, { where: { ...filters } }).catch(error => {
    return Promise.reject(error)
  })
}

async function destroy (filters) {
  return Bodega.destroy({ where: { ...filters } }).catch(error => {
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
