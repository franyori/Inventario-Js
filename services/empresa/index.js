const { Empresa } = require('../../models/index')

async function store (params) {
  return Empresa.create({
    ...params
  }).catch(error => {
    return Promise.reject(error)
  })
}

async function getAll (filters) {
  return Empresa.findAll({
    where: { filters }
  }).catch(error => {
    return Promise.reject(error)
  })
}

async function getOne (filters) {
  return Empresa.findOne({
    where: { ...filters }
  }).catch(error => {
    return Promise.reject(error)
  })
}

async function update (params, filters) {
  return Empresa.update(params, {
    ...filters
  }).catch(error => {
    return Promise.reject(error)
  })
}

async function destroy (filters) {
  return Empresa.destroy({
    ...filters
  }).catch(error => {
    return Promise.reject(error)
  })
}

module.exports = {
  store,
  getAll,
  getOne,
  update,
  destroy,

}
