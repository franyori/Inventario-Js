const { cliente } = require('../../models/index')

async function store (params) {
  return cliente
    .create({
      ...params
    })
    .catch(error => {
      return Promise.reject(error)
    })
}
async function getAll (filters) {
  return cliente
    .findAll({
      where: { ...filters }
    })
    .catch(error => {
      return Promise.reject(error)
    })
}

async function update (params, filters) {
  return cliente
    .update(params, {
      where: { ...filters }
    })
    .catch(error => {
      return Promise.reject(error)
    })
}
async function update2 (params, filters) {
  try {
    await cliente.update(params, {
      where: { ...filters }
    })
  } catch (error) {
    throw error
  }
}

async function getOne (filters) {
  return cliente
    .findOne({
      where: { ...filters }
    })
    .catch(error => {
      return Promise.reject(error)
    })
}

async function destroy (filters) {
  return cliente
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
