const { Cliente } = require('../../models/index')

async function store (params) {
  return Cliente
    .create({
      ...params
    })
    .catch(error => {
      return Promise.reject(error)
    })
}
async function getAll (filters) {
  return Cliente
    .findAll({
      include:[{
        association:"Persona"
      }]
    })
    .catch(error => {
      return Promise.reject(error)
    })
}

async function update (params, filters) {
  return Cliente
    .update(params, {
      where: { ...filters }
    })
    .catch(error => {
      return Promise.reject(error)
    })
}
async function update2 (params, filters) {
  try {
    await Cliente.update(params, {
      where: { ...filters }
    })
  } catch (error) {
    throw error
  }
}

async function getOne (filters) {
  return Cliente
    .findOne({
      where: { ...filters }
    })
    .catch(error => {
      return Promise.reject(error)
    })
}

async function destroy (filters) {
  return Cliente
    .destroy({
      where: { ...filters }
    })
    .catch(error => {
      return Promise.reject(error)
    })
}

module.exports = {
  store,
  getAll,
  getOne,
  update,
  update2,
  destroy
}
