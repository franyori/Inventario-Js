const { Rol } = require('../../models/index')

async function store (params) {
  return Rol.create({
    ...params
  }).catch(error => {
    return Promise.reject(error)
  })
}

async function getAll (filters) {
  return Rol.findAll({
    where: { ...filters }
  }).catch(error => {
    return Promise.reject(error)
  })
}

async function update (params, filters) {
  return Rol.update(params, {
    where: { ...filters }
  }).catch(error => {
    return Promise.reject(error)
  })
}

async function getOne (filters) {
  return Rol.findOne({
    where: { ...filters }
  }).catch(error => {
    return Promise.reject(error)
  })
}

async function destroy (filters) {
  return Rol.destroy({
    where: { ...filters }
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
