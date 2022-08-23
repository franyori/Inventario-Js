const { PresentacionProd } = require('../../models/index')

async function store (params) {
  return PresentacionProd.create({ ...params }).catch(error => {
    return Promise.reject(error)
  })
}

async function getAll (filters) {
  return PresentacionProd.findAll({
    include: [
      {
        association: 'UnidadMedidad'
      }
    ]
  }).catch(error => {
    return Promise.reject(error)
  })
}

async function getOne (filters) {
  return PresentacionProd.findOne({ where: { ...filters } }).catch(error => {
    return Promise.reject(error)
  })
}

async function update (params, filters) {
  return PresentacionProd.update(params, { where: { ...filters } }).catch(
    error => {
      return Promise.reject(error)
    }
  )
}

async function destroy (filters) {
  return PresentacionProd.destroy({ where: { ...filters } }).catch(error => {
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
