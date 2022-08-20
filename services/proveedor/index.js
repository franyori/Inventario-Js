const { Proveedor } = require('../../models/index')

async function store (params) {
  return Proveedor.create({ ...params }).catch(error => {
    console.log(error)
    return Promise.reject(error)
  })
}

async function getAll (filters) {
  return Proveedor.findAll({
    include: [
      {
        association: 'Persona'
      },
      {
        association: 'Empresa'
      }
    ]
  }).catch(error => {
    return Promise.reject(error)
  })
}

async function getOne (filters) {
  return Proveedor.findOne({
    where: { ...filters }
  }).catch(error => {
    console.log(error)
    return Promise.reject(error)
  })
}

async function update (params, filters) {
  return Proveedor.update(params, { where: { ...filters } }).catch(error => {
    return Promise.reject(error)
  })
}

async function destroy (filters) {
  return Proveedor.destroy({
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
  destroy
}
