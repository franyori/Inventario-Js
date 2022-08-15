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
    where: { ...filters }
  }).catch(error => {
    //console.log(error)
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
    where: {
      ...filters
    }
  }).catch(error => {
    return Promise.reject(error)
  })
}

async function destroy (filters) {
  return Empresa.destroy({
    where: {
      ...filters
    }
  }).catch(error => {
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
